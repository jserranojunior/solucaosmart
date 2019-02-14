


import Home from './components/Home'
import Proponentes from  './components/projetos/Proponentes'
import Contrato from  './components/projetos/Contrato'
import NovoSite from  './components/NovoSite'


const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/projetos', name:'projetos', component: Proponentes}, 
    {path:'/projetos/contrato', name:'contrato', component: Contrato}, 
    {path:'/novosite', name:'novosite', component: NovoSite}, 
]



export default routes