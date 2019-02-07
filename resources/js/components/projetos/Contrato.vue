<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    
                    <ul>
                        <li v-for="item in proponentes">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapState} from 'vuex'
    export default {
        name:"Contrato",        
         computed: {
        ...mapState({
            proponentes: state => state.Projetos.proponentes,
        }),    
    },
    mounted(){
        console.log(this.proponentes.nome)
    }
    }
       
</script>

<style scoped>

</style>