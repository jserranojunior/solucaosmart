


import NovoSite from './components/Home'
import Proponentes from  './components/projetos/Proponentes'
import Contrato from  './components/projetos/Contrato'
import Home from  './components/NovoSite'
import HomeProg from  './components/HomeProg'
import CadastroClube from  './components/clubesmart/CadastroClube'




const routes = [
    {path:'/', name:'home', component: HomeProg},
    {path:'/projetos', name:'projetos', component: Proponentes}, 
    {path:'/projetos/contrato', name:'contrato', component: Contrato}, 
    {path:'/novosite', name:'novosite', component: NovoSite}, 
    {path:'/siteprog', name:'siteprog', component: HomeProg}, 
    {path:'/cadastroclube', name:'cadastroclube', component: CadastroClube}, 
]



export default routes