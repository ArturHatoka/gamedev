import Vue from 'vue'
import Vuex from 'vuex'
import agolia from 'algoliasearch/lite'
const client = agolia('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e');
const index = client.initIndex('npm-search');

Vue.use (Vuex)

export default new Vuex.Store({
  state: {
    packages:[],
    package: {},
    status: false,
    searching: false,
    hitsPerPage: 10,
    search: '',
    page: 1,
    dialog: false
  },
  mutations: {
    setHotPackages(state, data){
      state.packages = data
      state.status = true
    },
    setSearching(state){
      index.search(state.search,
          {
            hitsPerPage: state.hitsPerPage,
            page: state.page
          })
          .then(({ hits }) => {
            state.packages = hits
            state.status = true
          })
          .catch(err => {
            alert(err);
          });
    },
    setSearch(state, val){
      state.search = val
      state.searching = val !== '';
      state.status = false
      this.dispatch('choseSearch')
    },
    setPage(state, val){
      state.status = false
      state.page = val
      this.dispatch('choseSearch')
    },
    choseSearch(state){
      if (state.searching){
        this.dispatch('setSearching')
      }else{
        this.dispatch('setHotPackages')
      }
    },
    setDialog(state, val){
      state.dialog = Boolean(val)
      if (!val) state.package = {}
    },
    setPackageInfo(state, pack){
      state.package = pack.info
      state.package['type'] = pack.type
      state.package['name'] = pack.name
      state.dialog = true
    },
  },
  getters: {
    getPackages(state){
      return state.packages
    },
    getStatus(state){
      return state.status
    },
    getDialog(state){
      return state.dialog
    },
    getPackageInfo(state){
      return state.package
    }
  },
  actions: {
    setHotPackages({commit, state}){
      Vue.axios.get(`https://data.jsdelivr.com/v1/stats/packages/day?limit=${state.hitsPerPage}&page=${state.page}`)
          .then((response) => {
            commit('setHotPackages', response.data)
          })
          .catch(err => {
            alert(err);
          });
    },
    setPackageInfo({commit}, pack){
      Vue.axios.get(`https://data.jsdelivr.com/v1/package/${pack.type}/${pack.name}`)
          .then((response) => {
            commit('setPackageInfo', {type:pack.type, name:pack.name, info:response.data})
          })
          .catch(() => {
            alert(`Couldn't fetch package`)
          })
    },
    setSearching({commit}){
      commit('setSearching')
    },
    choseSearch({commit}){
      commit('choseSearch')
    }
  },
  modules: {
  },
})
