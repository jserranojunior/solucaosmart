 <template>
     <div>

         <Menu></Menu>

         <div class="row row-space">
             <div class="col-12 text-center">
                 <h4>Trabalhe Conosco</h4>
             </div>
         </div>      

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <input type="text" v-model="inputs.nome" class="form-control" placeholder="Nome Completo"> 
             </div>
         </div>
         <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.data_nascimento" v-mask="'99/99/9999'" class="form-control" placeholder="Data de Nascimento">
                
             </div>
             <div class="col-lg-2 col-md-4">
                 <select name="estado_civil" class="form-control" v-model="inputs.estado_civil">
                     <option disabled value="" > Estado Civil </option>
                     <option value="Solteiro">Solteiro</option>
                     <option>Casado</option>
                     <option>Divorciado</option>
                     <option>Viúvo</option>
                     <option>Outros</option>
                 </select>
              </div>
         </div>

        
        <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.rg"  class="form-control" placeholder="RNE/RNM/RG/CI">                
             </div>

             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.cpf" v-mask="'999.999.999.99'" class="form-control" placeholder="CPF">
             </div>
            
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.celular" v-mask="'(99)99999-9999'" class="form-control" placeholder="Celular">
                
             </div>
             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.telefone" v-mask="'(99)9999-9999'" class="form-control" placeholder="Telefone">
             </div>
         </div>

        


         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <input type="text" v-model="inputs.email" class="form-control" placeholder="E-mail"> 
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
              <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.nacionalidade" class="form-control" placeholder="Nacionalidade">
             </div>

             <div class="col-lg-2 col-md-4">
                 <select v-model="inputs.tipo_logradouro" class="form-control">
                     <option disabled value="" > Tipo Logradouro </option>
                     <option value="Rua">Rua</option>
                     <option value="Avenida">Avenida</option>
                     <option value="Alameda">Alameda</option>
                     <option value="Alameda">Viela</option>
                     <option value="Alameda">Estrada</option>
                 </select>
             </div>             
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <input type="text" v-model="inputs.logradouro" class="form-control" placeholder="Logradouro / Endereço"> 
             </div>             
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.cep" class="form-control" placeholder="CEP">                
             </div>
             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.bairro" class="form-control" placeholder="Bairro">
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.numero" class="form-control" placeholder="Numero">                
             </div>
             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.complemento" class="form-control" placeholder="Complemento">
             </div>
         </div>

  <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.cidade" class="form-control" placeholder="Cidade">                
             </div>
             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.estado" class="form-control" placeholder="Estado">
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.cursos" class="form-control" rows="5" placeholder="Escreva cursos que você tenha"></textarea> 
             </div>             
         </div>


         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.experiencias" class="form-control" rows="5" placeholder="Escreva suas experiencias profissionais"></textarea> 
             </div>             
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.formacao" class="form-control" rows="5" placeholder="Escreva seu grau academico e onde estudou"></textarea> 
             </div>             
         </div>

<div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.idiomas" class="form-control" rows="5" placeholder="Escreva idiomas que fala"></textarea> 
             </div>             
         </div>

           <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.pretencao" class="form-control" rows="5" placeholder="Escreva areas que gostaria de atuar"></textarea> 
             </div>             
         </div>


         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.observacao" class="form-control" rows="3" placeholder="Observações"></textarea> 
             </div>             
         </div>

               
        
         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8 text-right">
                <router-link to="/">
                 <div class="btn btn-primary" @click="submit()">Enviar</div>
                </router-link>
             </div>
         </div>


     </div>
 </template>
 
 <script>
 import {
    mapActions
} from 'vuex'

import Menu from '../menu/Menu'

import AwesomeMask from 'awesome-mask'

     export default {
         name:"Trabalhe",
         data(){
             return{
                 inputs:{}
              }
         },
         components:{
             Menu,
         },
         methods:{
              ...mapActions([
            'SubmitTrabalhe',
            'EnviarEmailTrabalhe',
        ]),
        submit(){
            this.SubmitTrabalhe(this.inputs)
            this.EnviarEmailTrabalhe(this.inputs)
        },
        changeBackground(){
            const el = document.body;
            el.classList.add('white-body');
        }
         }, 
         beforeMount(){
             this.inputs.nome = ""
             this.inputs.data_nascimento = ""
             this.inputs.estado_civil = ""
              this.inputs.rg = ""             
             this.inputs.cpf = ""
             this.inputs.telefone = ""
             this.inputs.celular = ""
             this.inputs.email = ""
             this.inputs.profissao = ""
             this.inputs.nacionalidade = ""
             this.inputs.logradouro = ""
             this.inputs.cep = ""
             this.inputs.bairro= ""
             this.inputs.numero = ""
             this.inputs.complemento = ""
             this.inputs.observacao = ""
             this.inputs.tipo_logradouro = ""

             this.inputs.cidade = ""
             this.inputs.estado = ""
             this.inputs.formacao = ""
             this.inputs.pretencao = ""
             this.inputs.cursos = ""
             this.inputs.experiencias = ""
             this.inputs.idiomas = ""
         },
         mounted(){
             this.changeBackground();
         },
          directives: {               
                'mask': AwesomeMask 
               } 
     }
 </script>
 
 <style>
.white-body{
    background-color:#fff;
}

 .row-space-form{
     margin-top:7px;
 }
 .row-space{
     margin-top:20px;
 }
 </style>