<template>
    <v-dialog
        v-model="dialog"
        width="25%"
    >
        <v-card>
            <v-card-title class="headline">{{getPackageInfo.name}}</v-card-title>
            <v-card-text>
                <h3>Type:</h3>
                <span>{{getPackageInfo.type}}</span>
                <h3>Vers:</h3>
                <div
                    v-if="getPackageInfo.tags"
                >
                    <div
                        v-if="getPackageInfo.tags.latest"
                    >
                        <span
                            v-for="(tag,name) in getPackageInfo.tags" :key="name"
                        >
                           {{name}}:{{tag}} <br>
                        </span>
                    </div>
                    <div
                        v-else
                    >
                        <span>latest: {{getPackageInfo.versions[0]}}</span>
                    </div>
                </div>
                <span class="font-weight-bold">
                    Watch on
                    <a v-if="getPackageInfo.type === 'npm'"
                       :href="'https://www.npmjs.com/package/'+getPackageInfo.name"
                       target="_blank">
                        NPM
                    </a>
                    <a v-else
                       :href="'https://github.com/'+getPackageInfo.name"
                       target="_blank">
                        GitHub
                    </a>
                </span>


            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: "Modal",
    computed:{
        ...mapGetters([
            'getDialog',
            'getPackageInfo'
        ]),
    },
    data(){
        return{
            dialog: false
        }
    },
    watch:{
        dialog(val){
            if (!val) this.closeModal()
        },
        getDialog(val){
            this.dialog = val
        }
    },
    methods:{
        ...mapMutations([
            'setDialog'
        ]),
        closeModal(){
            this.setDialog(0)
        }
    }
}
</script>

<style scoped>
</style>
