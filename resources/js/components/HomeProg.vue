<template>
    <div>
        <div class="container-fluid">
            <div class="row row-space ">
    
                <div class="col-12 nav-social   navbar-dark bg-light text-light">
                    <div class="navbar grad-smart">
                        <div class="col-md-4 sm-align-center col-sm-12">
                            <div class="btn-sm"> <i class="fas fa-map-marker-alt"></i> Rua Dr. Costa Valente. 217 - Brás - SP</div>
                        </div>
    
                        <div class="col-md-4 sm-align-center col-sm-12 text-center">
                            <span>
                              <div class="btn">
                                <i class="fab fa-twitter"></i>
                              </div>
            
                              |
                              <div class="btn">
                                <i class="fab fa-facebook-square"></i>
                              </div>|
                              <div class="btn">
                                <i class="fab fa-google-plus-g"></i>
                              </div>|
                              <div class="btn">
                                <i class="fab fa-linkedin"></i>
                              </div>|
                              <div class="btn">
                                <i class="fab fa-instagram"></i>
                              </div>
                            </span>
                        </div>
    
    
                        <div class="col-md-4 sm-align-center col-sm-12 text-right">
                            <div class="btn sm-align-center">ENTRAR </div>
    
                            <div class="btn sm-align-center">INSCREVA-SE</div>
                        </div>
                    </div>
                </div>
    
            </div>
    
    
    
            <div class="row row-space">
                <div class="col-12 text-center">
                    <span class="text-center">
                            <img src="/img/bandeiras/portugues.png" class="img-fluid img-bandeira" alt=""> Português | 
                            <img src="/img/bandeiras/espanhol.png" class="img-fluid img-bandeira" alt=""> Espanhol | 
                            <img src="/img/bandeiras/ingles.png" class="img-fluid img-bandeira" alt=""> Inglês | 
                            <img src="/img/bandeiras/frances.png" class="img-fluid img-bandeira" alt=""> Francês</span>
                </div>
            </div>
            
            <Menu></Menu>
    
            <div class="row row-space">
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <router-link to="/clubesmart">
                                    <a href="#">
                                <img src="/img/clube.jpeg" class="d-block w-100 img-fluid" alt="...">
                              </a>
                                </router-link>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- <div class="row row-space">
                                <div class="col-12">
                                    Pessoal / Empresarial
                                </div>
                  </div>-->
    
            <div class="row row-space">
                <div class="col-md-6  col-sm-12 text-center">
                    <div class="btn-big-smart grad-smart">
                        <h5>PESSOAL <i class="fas fa-angle-down"></i></h5>
                    </div>
                </div>
    
                <div class="col-md-6 col-sm-12 text-center">
                    <div class="btn-big-smart grad-smart">
                        <h5>EMPRESARIAL <i class="fas fa-angle-down"></i></h5>
                    </div>
                </div>
            </div>
    
            <div class="row-space text-center row justify-content-center">
                <div class="col-10">
                    <h2 class="text-center"> SEJA BEM VINDO</h2>
                    <h5 class="text-center">orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor. Morbi rhoncus, odio eu laoreet aliquet, urna tortor volutpat purus, in consectetur metus justo vel ligula.
                        Cras a dictum turpis, ac blandit elit. </h5>
                </div>
            </div>
    
            <div class="row row-space justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fas fa-home"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fas fa-university"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fas fa-shopping-bag"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="row row-space">
                         <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fas fa-signal"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>

                         <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fas fa-key"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>

                         <div class="col-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h2 class="text-smart"><i class="fab fa-dropbox"></i></h2>
                                    <h5 class="card-title">LOREM IPSUM DOLOR</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-space">
                <div class="col-6">
                    <img src="/img/predio.png" class="img-fluid img-center" alt>
                </div>
                <div class="col-6 bg-grey">
                  <div class="painel-sobre">
                        <h1>
                            Sobre nossa empresa
                        </h1><br>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto numquam quia harum quos quaerat error impedit illum veniam, optio incidunt voluptatem vel, officiis obcaecati suscipit corporis sit iste odit!
                        </h4>
                  </div>
                </div>
            </div>

            <div class="row-space text-center row justify-content-center">
                <div class="col-10">
                    <h2 class="text-center"> TRAMITES </h2>
                    <h5 class="text-center">orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet dolor nisl. Vestibulum eleifend sit amet ex in tempor. Morbi rhoncus, odio eu laoreet aliquet, urna tortor volutpat purus, in consectetur metus justo vel ligula.
                        Cras a dictum turpis, ac blandit elit. </h5>
                </div>
            </div>
    
            <div class="row-space">
                <!-- /solucaosmart -->
                <img src="/img/previa-corte.png" class="img-fluid img-center" alt>
            </div>
    
    
        </div>
    </div>
</template>

<script>
import Menu from './menu/Menu'
export default {
    name: "HomeProg",
    mounted() {
        console.log("montado");
    },
    components:{
        Menu,
    }
};
</script>

<style scoped>
</style>