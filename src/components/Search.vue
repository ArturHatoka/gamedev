<template>
    <v-container class="d-flex align-center">
        <v-btn
            :disabled="page===1"
            @click="page--"
        >
            prev
        </v-btn>
        <v-text-field
            class="px-3 pt-5"
            label="Поиск"
            @input="input"
        />
        <v-btn
            @click="page++"
        >
            next
        </v-btn>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: "Search",
    data(){
        return{
            page: 1,
        }
    },
    methods:{
        ...mapMutations([
            'setPage',
            'setSearch'
        ]),
        input(value){
            this.setSearch(value)
        },
    },
    watch:{
        page(){
            this.setPage(this.page)
        }
    }
}
</script>

<style scoped>
</style>
