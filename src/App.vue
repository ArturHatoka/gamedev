<template>
  <v-app>
    <v-app-bar>
      <search/>
    </v-app-bar>
    <v-main>
      <results
        v-if="status"
      />
      <preloader
        v-else
      />
    </v-main>
    <v-footer>
      <modal/>
      <footer-wrap/>
    </v-footer>
  </v-app>
</template>

<script>
import Search from "./components/Search";
import Preloader from "./components/Preloader";
import Results from "./components/Results";
import Modal from "./components/Modal";
import FooterWrap from "./components/FooterWrap";
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {FooterWrap, Search, Modal, Results, Preloader},
  computed:{
    ...mapGetters([
      'getStatus'
    ]),
  },
  data(){
    return{
      status:false
    }
  },
  beforeCreate() {
    this.$store.dispatch('setHotPackages');
  },
  watch:{
    getStatus(){
      this.status = this.getStatus
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: #F2F2F2;
    font-family: Source Sans Pro, Arial, sans-serif;
  }
  header {
    flex-grow: 0;
  }
</style>

