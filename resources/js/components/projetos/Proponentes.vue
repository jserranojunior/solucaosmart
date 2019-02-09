 <template>
     <div>
         <div class="row row-space">
             <div class="col-12 text-center">
                 <h4>PROPONENTES</h4>
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
                 <input type="text" v-model="inputs.rne" class="form-control" placeholder="RNE">
                
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
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.profissao" class="form-control" placeholder="Profissão">                
             </div>
             <div class="col-lg-2 col-md-4">
                  <input type="text" v-model="inputs.nacionalidade" class="form-control" placeholder="Nacionalidade">
             </div>
         </div>


         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <input type="text" v-model="inputs.email" class="form-control" placeholder="E-mail"> 
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <input type="text" v-model="inputs.logradouro" class="form-control" placeholder="Logradouro"> 
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
             <div class="col-lg-4 col-md-8">
                 <select class="form-control" v-model="inputs.projetos">
                     <option value="" disabled>Projetos</option>
                     <option>Big Casa & Construção</option>
                    <option>GBE Modas</option>
<option>Farmácia Farmelhor</option>
<option>Supermercado</option>
<option>Posto de Gasolina</option>
<option>Clínica Médica</option>
<option>Instituição de Ensino</option>
<option>Loja de Sapato</option>
<option>Loja de Roupa</option>
<option>Papelaria</option>
<option>Incorporadora</option>
                 </select>
             </div>             
         </div>




         <!-- APORTE -->
        <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <input type="text" v-model="inputs.valor_aporte"  v-mask="'money'" class="form-control" placeholder="Valor do Aporte">                
             </div>
             <div class="col-lg-2 col-md-4">
                <select class="form-control" v-model="inputs.forma_pagamento">
                    <option disabled value="">Forma de Aporte</option>
                    <option>Á vista</option>    
                    <option>Parcelado</option>                
                </select>
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-2 col-md-4">
                 <select class="form-control" v-model="inputs.transferencia">
                    <option disabled value="">Tranferência</option>
                    <option>Investimentos</option>
                    <option>Banco Caixa</option>
                    <option>Banco Santander</option>                                      
                </select>
             </div>
             <div class="col-lg-2 col-md-4">
                <select class="form-control" v-model="inputs.deposito">
                    <option disabled value="">Depósitos</option>
                    <option>Dinheiro</option>
                    <option>Banco Caixa</option>
                    <option>Banco Santander</option>                   
                </select>
             </div>
         </div>

         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8">
                 <textarea v-model="inputs.observacao" class="form-control" rows="3" placeholder="Observações"></textarea> 
             </div>             
         </div>

               
        
         <div class="row row-space-form justify-content-center">
             <div class="col-lg-4 col-md-8 text-right">
                 <router-link to="/projetos/contrato">
                 <div class="btn btn-primary " @click="submit()">Gerar Contrato</div>
                 </router-link>
             </div>
         </div>


     </div>
 </template>
 
 <script>
 import {
    mapActions
} from 'vuex'


import AwesomeMask from 'awesome-mask'

     export default {
         name:"Proponentes",
         data(){
             return{
                 inputs:{}
              }
         },
         methods:{
              ...mapActions([
            'SubmitProp',
        ]),
        submit(){
            this.SubmitProp(this.inputs)
        },
        changeBackground(){
            const el = document.body;
            el.classList.add('white-body');
        }
         },
         beforeMount(){
             this.inputs.estado_civil = ""
             this.inputs.forma_pagamento = ""
             this.inputs.transferencia = ""
             this.inputs.deposito = ""
             this.inputs.projetos = ""
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