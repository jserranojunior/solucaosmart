<template>
    <div>
        <div class="container-fluid">
            <div class="row row-space">
                <div class="col-12">
                    <nav class="navbar nav-social grad-smart navbar-dark bg-light text-light">
                        <div class="col-4"><span><i class="fas fa-map-marker-alt"></i> Rua Dr. Costa Valente</span></div>
                       
                       <div class="col-4 text-center">
                            <span><div class="btn"><i class="fab fa-twitter"></i></div> | 
                        
                        <div class="btn"><i class="fab fa-facebook-square"></i> </div>| 
                        <div class="btn"><i class="fab fa-google-plus-g"></i></div> | 
                        <div class="btn"><i class="fab fa-linkedin"></i></div> |
                            <div class="btn"><i class="fab fa-instagram"></i></div></span>
                       </div>
                        <div class="col-4 text-right">
                            <span>ENTRAR INSCREVA-SE</span>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row row-space">
                <div class="col-12 text-center">
                    <span class="text-center">Português | Espanhol | Inglês | Francês</span>
                </div>
            </div>
            <div class="row row-space">
                <div class="col-12">
                    <nav class="navbar grad-smart navbar-expand-lg navbar-dark bg-light">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto text-nowrap flex-row mx-md-auto">
                                <li>
                                    <a class="nav-link" href="#">Incorporadora</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Projetos Empresariais</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Comunicação</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Fintech</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Eventos</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Trabalhe Conosco</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Parceiros</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Contatos</a>
                                </li>
                            </ul>
    
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row row-space">
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="#" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="#" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="#" class="d-block w-100" alt="...">
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
            <div class="row row-space">
                <div class="col-12">
                    Pessoal / Empresarial
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeProg",
    mounted() {
        console.log('montado')
    }
}
</script>

<style scoped>
    .grad-smart{
         background-image: linear-gradient(to left, #ea3232 , #ff9900);
    }
    .navbar-dark .navbar-nav .nav-link {
    color: #f8f9fa;
}
</style>