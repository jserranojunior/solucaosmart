<template>
    <div>    
            <div class="container-fluid smart-body">
                <div class="row row-space">
                    <div class="col-12">
                        <img src="/projeto/public/img/logo.png" alt="">
                    </div>
                </div>
                <div class="row row-space justify-content-md-center">
    
                    <div class="col-md-3">
                        <!-- Menu List -->
                        <ul class="list-unstyled s-header__nav-menu">
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="index.html">Home</a>
                            </li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Sobre nós</a></li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Quem somos</a></li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Serviços</a></li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Agenda</a></li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Saiba mais</a></li>
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Contato</a></li>
                        </ul>
                        <!-- End Menu List -->
    
                    </div>
    
    
    
                    <div class="col-md-3">
                        <ul class="list-unstyled s-header__nav-menu">
                            <li class="s-header__nav-menu-item">
                                <router-link to="/projetos">
                                    <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Projetos
                                Empresáriais</a>
                                </router-link>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Big Casa
                                & Construção</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Farmácia
                                Farmelhor</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">GBE
                                Modas</a>
                            </li>
    
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Crédit
                                Mútuo/Pasanaku Familia Feliz</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Estacionamento</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">z10</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="http://www.shopsmart.com.br" target="_blank">Shopping
                                Smart</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Conta
                                Smart</a>
                            </li>
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Cartão
                                Débito e Crédito</a>
                            </li>
    
                            <li class="s-header__nav-menu-item">
                                <a class="s-header__nav-menu-link s-header__nav-menu-link-divider -is-active" href="#">Maquininha
                                Smart</a>
                            </li>
    
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Cartório Postal</a></li>
    
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="#">Envio / Câmbio</a></li>
    
                            <li class="s-header__nav-menu-item"><a class="s-header__nav-menu-link s-header__nav-menu-link-divider" href="http://www.redemegafox.com.br" target="_blank">Rede megaFox</a></li>
    
    
                        </ul>
                    </div>
    
                </div>
    
                <div class="row row-space">
                    <div class="col-md-12 text-right">
                        <ul class="list-inline s-header__action s-header__action--rb">
                            <li class="s-header__action-item">
                                <a class="s-header__action-link" href="#">
                                <i class="g-padding-r-5--xs fab fa-facebook-square"></i>
                                <span class="g-display-none--xs g-display-inline-block--sm">Facebook</span>
                            </a>
                            </li>
                            <li class="s-header__action-item">
                                <a class="s-header__action-link" href="#">
                                <i class="g-padding-r-5--xs fab fa-twitter-square"></i>
                                <span class="g-display-none--xs g-display-inline-block--sm">Twitter</span>
                            </a>
                            </li>
                            <li class="s-header__action-item">
                                <a class="s-header__action-link" href="#">
                                <i class="g-padding-r-5--xs fab fa-twitter-square"></i>
                                <span class="g-display-none--xs g-display-inline-block--sm">Instagram</span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
    
    
            </div>          
    
    </div>
</template>

<script>
export default {
    name: "Home",
    methods:{
        changeBackground(){
            const el = document.body;
            el.classList.add('smart-body');
        }
    },
    mounted(){
        this.changeBackground();
    },
}
</script>

<style>
.smart-body {
    background-color: #FF9900;
}

.row-space {
    margin-top: 7px
}

.s-header__nav-menu-link-divider[href]:focus,
.s-header__nav-menu-link-divider[href]:hover {
    color: #fff;
}

.s-header__nav-menu-link {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 300;
    color: #fff;
    opacity: .85;
    padding: .3125rem;
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
}

.list-unstyled {
    padding-left: 0;
    padding-bottom: 15px;
    list-style: none;
}

.s-header__nav-menu {
    width: 18.75rem;
    float: left;
    text-align: left;
    margin-bottom: 0;
}

.s-header__nav-menu-item {
    padding: 0 0 0 5.625rem;
    margin-bottom: .3125rem;
}

.s-header__nav-menu-link {
    font-size: 1.1rem;
}

.s-header__action--rb {
    right: 1.875rem;
    bottom: 1.875rem;
}

.list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;
}

.list-inline>li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}

.s-header__action-link {
    position: relative;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    padding: .3125rem;
}

.s-header__action-link:hover {
    color: rgba(255, 255, 255, 0.7);
}
</style>
