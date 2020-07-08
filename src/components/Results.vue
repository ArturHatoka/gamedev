<template>
    <v-container>
        <v-row dense>
            <v-col
                    v-for="(pack,i) in getPackages"
                    :key="i"
                    cols="12"
                    sm="6"
            >
                <v-card>
                    <v-card-title class="pb-1">
                        {{pack.name}}
                    </v-card-title>
                    <div class="d-flex justify-space-between">
                        <v-card-subtitle>
                            Type: {{pack.type?pack.type:'npm'}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                                    color="orange"
                                    text
                                    @click.stop="openModal(pack.type?pack.type:'npm', pack.name)"
                            >
                                Explore
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "Results",
    computed:{
        ...mapGetters([
            'getPackages',
            'getStatus'
        ]),
    },
    data(){
        return{
            dialog: false
        }
    },
    methods:{
        ...mapMutations([
            'setDialog',
            'setPackageInfo'
        ]),
        openModal(type, name){
            this.setPackageInfo({type:type, name:name})
        }
    }
}
</script>
<style scoped>
</style>
