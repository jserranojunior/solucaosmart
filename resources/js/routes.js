


import NovoSite from './components/Home'
import Proponentes from  './components/projetos/Proponentes'
import Contrato from  './components/projetos/Contrato'
import Home from  './components/NovoSite'
import HomeProg from  './components/HomeProg'
import CadastroClube from  './components/clubesmart/CadastroClube'
import Trabalhe from  './components/trabalheconosco/Trabalhe'



const routes = [

    {path:'/', name:'home', component: HomeProg},

    {path:'/projetos', name:'projetos', component: Proponentes}, 
    {path:'/projetos/contrato', name:'contrato', component: Contrato}, 
    {path:'/novosite', name:'novosite', component: NovoSite}, 
    {path:'/siteprog', name:'siteprog', component: HomeProg}, 
    {path:'/clubesmart', name:'clubesmart', component: CadastroClube}, 
    {path:'/trabalheconosco', name:'trabalheconosco', component: Trabalhe}, 
]



export default routes