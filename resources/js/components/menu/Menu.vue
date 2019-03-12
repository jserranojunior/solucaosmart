<template>
    <div>
<div class="row row-space">
                <div class="col-12">
                    <nav class="navbar grad-smart navbar-expand-lg navbar-dark bg-light">
                        <button class="navbar-toggler text-center text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto text-nowrap flex-row mx-md-auto">

                                <li>
                                    <router-link to="/">
                                        <a class="nav-link" href="#">Home</a>
                                    </router-link>
                                </li>


                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Incorporadora</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Terrenos</a>
                                        <a class="dropdown-item" href="#">Casas</a>
    
                                        <a class="dropdown-item" href="#">Apartamentos</a>
                                        <a class="dropdown-item" href="#">Salão Comercial</a>
                                        <a class="dropdown-item" href="#">Sala Comercial</a>
                                    </div>
                                </li>
    
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projetos Empresariais</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li class="dropdown-submenu">
                                            <a class="dropdown-item" tabindex="-1" href="#">Executados</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item">
                                                    <a href="#">Cartório Postal</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="http://www.redemegafox.com.br" target="_blank">Rede MegaFox</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Big Casa&Construção</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Farmelhor (oratório)</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">GBE Modas</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="http://www.shopsmart.com.br" target="_blank">Shop Smart</a>
                                                </li>
                                            </ul>
                                        </li>
    
                                        <li class="dropdown-submenu">
                                            <a class="dropdown-item" tabindex="-1" href="#">Em Andamento</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item">
                                                    <a href="#">Loja de Roupa</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Loja de Sapato</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Posto de Gasolina</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Supermercado</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Escola</a>
                                                </li>
                                                <li class="dropdown-item">
                                                    <a href="#">Saiba mais...</a>
                                                </li>
                                            </ul>
                                        </li>
    
                                        <a class="dropdown-item" href="#">Conheça mais</a>
                                        <router-link to="/projetos">
                                            <a class="dropdown-item" href="#">Seja Sócio</a>
                                        </router-link>
                                        <a class="dropdown-item" href="#">Sala Comercial</a>
                                    </div>
                                </li>
    
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Comunicação</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="http://www.redemegafox.com.br" target="_blank">Rádio/TV MegaFox</a>
                                        <a class="dropdown-item" href="#">Jornal La Voz</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fintech</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <router-link to="/clubesmart">
                                            <a class="dropdown-item" href="#">Clube Smart</a>
                                        </router-link>
                                        <a class="dropdown-item" href="#">Crédito Mútuo</a>
                                        <a class="dropdown-item" href="#">Conta Smart</a>
    
                                        <a class="dropdown-item" href="#">Pagamentos</a>
                                        <a class="dropdown-item" href="#">Envios (Agente More)</a>
                                    </div>
                                </li>
    
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eventos</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Palestras</a>
                                        <a class="dropdown-item" href="#">Reuniões</a>
                                    </div>
                                </li>
                                <li>
                                    <router-link to="/trabalheconosco">
                                        <a class="nav-link" href="#">Trabalhe Conosco</a>
                                    </router-link>
                                </li>
    
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Parceiros</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Seja Parceiro</a>
                                    </div>
                                </li>
    
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contatos</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Geral</a>
                                        <a class="dropdown-item" href="#">Diretoria</a>
                                        <a class="dropdown-item" href="#">Gestão</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:"Menu"
    }
</script>

<style scoped>

</style>