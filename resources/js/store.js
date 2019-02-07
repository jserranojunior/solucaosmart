import Vue from 'vue'
import Vuex from 'vuex'

import Projetos from './components/projetos/VuexProjetos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Projetos,
    }
})