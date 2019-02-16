<template>
    <div>
        <div class="container-fluid">
            <div class="row row-space">
                <div class="col-md-12 text-center">
                    <h5>CONTRATO DE CESSÃO DE QUOTAS DO PROJETO
                        <br> “{{proponente.projetos}}” <br><br><br><br><br>
                    </h5>
                </div>
            </div>
            <div class="row justify-content-center text-justify">
                <div class="col-md-10 text-justify">
                    <p>
                        <span class="font-weight-bold text-justify">
                      PASANAKU FAMILIA FELIZ- INCORPORACAO, CONSTRUCAO, CREDITOS MUTUOS,
                      ADMINISTRACAO DE FUNDOS E CORRESPONDENTE BANCARIO LTDA
                    </span>, CNPJ n. 28.616.397/0001-60 com sede em Rua Doutor Costa Valente, 217 – 2 º andar – Brás – São Paulo – SP – CEP: 03052-000, neste ato representada por Bladimir Mamani Chuquimia, portador do RNE número Y266740-F
                        e inscrito no CPF número 227.355.598-90 e Jaime Wilston Mamani Chuquimia portador do RNE Y269466-V e inscrito no CPF número 227.370.898-08, ambos diretores da empresa acima qualificada, doravante denominados
                        <span class="font-weight-bold">ADMINISTRADORES</span> , e de outro lado {{proponente.nome}}, data de nascimento, {{proponente.data_nascimento}} ,nacionalidade {{proponente.nacionalidade}}, estado civil: {{proponente.estado_civil}},
                        profissão {{proponente.profissao}}, portador do RNE número {{proponente.rne}}, RG: {{proponente.rg}},
                        <span v-if="proponente.cedula_identidade">Cédula de Identidade: {{proponente.cedula_identidade}}</span> e inscrito no CPF número {{proponente.cpf}} , residente em {{proponente.logradouro}}, n° {{proponente.numero}}, bairro: {{proponente.bairro}}
                        - Cidade: {{proponente.cidade}}, Estado {{proponente.estado}} - CEP: {{proponente.cep}},complemento: {{proponente.complemento}}, telefones: {{proponente.celular}} - {{proponente.telefone}}, E-mail: {{proponente.email}}, doravante denominada
                        <span class="font-weight-bold">APORTADOR</span>, sendo assim, firma- se o presente CONTRATO DE CESSÃO DE QUOTAS DO PROJETO “{{proponente.projetos}}”, conforme as cláusulas a seguir:
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 1ª – Do Objeto do Contrato</span>
                        <br>Por meio deste contrato, que firmam entre si os
                        <span class="font-weight-bold">ADMINISTRADORES</span> e o <span class="font-weight-bold">APORTADOR</span>, regula–se a transferência de {{proponente.valor_aporte}} ({{valor_extenso}}) quotas de titularidade dos Administradores.
                        <br>
                        <br>§ 1º O
                        <span class="font-weight-bold">APORTADOR</span> declara, ainda estar ciente sobre o projeto “ {{proponente.projetos}}”.
    
    
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 2ª – Do Valor</span>
                        <br> Para a transferência das quotas, as partes ajustam o valor certo de R${{proponente.valor_aporte}} ({{valor_extenso}} de reais), valor a ser aportado nas seguintes condições:
                        <br>
    
                        <br> O tipo de pagamento será do tipo: {{proponente.forma_pagamento}}
    
                        <span v-if="proponente.transferencia">O pagamento será feito atravez de transferência: {{proponente.transferencia}}</span>
                        <br>
                        <span v-if="proponente.deposito">O pagamento será feito atravez de deposito: {{proponente.deposito}}</span>
                        <br>Observações: {{proponente.observacoes}}
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 3ª – Da Transferência Definitiva das Quotas</span>
                        <br> As partes se comprometem reciprocamente a acompanhar todos os encaminhamentos do projeto e fornecer todos os documentos necessários para seu registro na Junta Comercial.
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 4ª – Dos Direitos e Obrigações</span>
                        <br> Os ADMINISTRADORES:
                        <br>A)Transferir as quotas livres e desembaraçadas de qualquer ônus;
                        <br>B)Informar o APORTADOR sobre qualquer ônus reais, judiciais ou extrajudiciais ou quaisquer outros fatos, ações ou medidas administrativas que possam por ventura atingir as quotas cedidas;
                        <br>C)Realizar as diligencias e prestar toda a assistência ao APORTADOR para a transferência definitiva das quotas.
    
                        <br>O APORTADOR:
                        <br>A)Adimplir suas obrigações no tempo e modo acordados neste contrato;
                        <br>B)Fornecer todos os documentos pessoais para a transferência;
                        <br>C)Informar os administradores sobre a insolvência civil, recuperação judicial ou extrajudicial, falência ou de qualquer ação ou execução declarada contra si.
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 5ª – Dos Rendimentos</span>
    
                        <br>
                        <br> a)<span class="font-weight-bold"> O APORTADOR</span> terá a rentabilidade de 1 % ao mês até a viabilidade da empresa.
                        <br> b)<span class="font-weight-bold"> O APORTADOR</span> terá a rentabilidade de 3% ao mês no período de 24 meses após a sua contemplação.
                        <br> c) Após os períodos acima descritos <span class="font-weight-bold"> O APORTADOR</span> terá a participação nos lucros do projeto de acordo com as quotas adquiridas.
                        <br> d)<span class="font-weight-bold"> O APORTADOR</span> receberá suas rentabilidades a cada 12 meses, o lucro será mensalmente.
                        <br>
                        <br>
    
                        <span class="font-weight-bold">Cláusula 6ª – Da Desistência</span>
                        <br>Os administradores se comprometem a devolver o valor aportado integralmente em caso de desistência por parte do APORTADOR,
                        <span class="font-weight-bold">
                      desde que comunicado com 60 dias de antecedência e
                      por escrito aos ADMINISTRADORES.
                    </span>
                        <br>
                        <br>
                        <span class="font-weight-bold text-justify">Cláusula 7ª – Dos Rendimentos</span>
                        <br>O valor descrito na Cláusula 2º, será {{proponente.forma_pagamento}}.
    
    
    
    
                        <br>
                        <br>Por estarem cientes, as partes assinam em duas vias o presente instrumento particular na presença de duas testemunhas.
                        <br>
                        <br> São Paulo {{dia}} de {{mes}} de {{ano}}.
                    </p>
                </div>
            </div>
            <div class="row row-space justify-content-center">
                <div class="col-md-5">___________________________
                    <br>Pasanaku Familia Feliz
                    <br>CNPJ: 28.616.397/0001-60
                </div>
    
                <div class="col-md-5 text-right">_________________________
                    <br> Nome: {{proponente.nome}}
                    <br> CPF: {{proponente.cpf}}
                </div>
            </div>
            <div class="row row-space justify-content-center">
                
                <div class="col-md-5">
                    Testemunha 1 <br><br>
                    ___________________________
                    <br>
                    <br>
                </div>
                
                <div class="col-md-5 text-right">
                    Testemunha 2 <br><br>
                    _________________________
                    <br>
                    <br>
                </div>
            </div>
    
            <div class="row row-space justify-content-center no-print">
                <div class="col-md-10 text-right">
                    <div class="btn btn-primary" @click="print()">IMPRIMIR</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
var extenso = require('extenso')
import moment from 'moment'

export default {
    name: "Contrato",
    data() {
        return {
            body: '',
            valor_extenso: '',
            dia: Number,
            ano: Number,
            mes: '',
        }
    },
    computed: {
        ...mapState({
            proponente: state => state.Projetos.proponentes
        })
    },
    mounted() {
        if (this.proponente.valor_aporte) {
            this.valor_extenso = extenso(this.proponente.valor_aporte);
        }
        console.log(this.proponente.nome);
        this.body = `<div class="container"></div>`

        var dataAtual = new Date();

        this.dia = dataAtual.getDate()


        moment.locale('pt');
        this.mes = moment().format('MMMM')
        this.ano = moment().format('YYYY')



    },
    methods: {
        print() {
            window.print();
        }
    }
};
</script>

<style scoped>
@media print {
    * {
        font-size: 18px ! important;
    }
    .no-print {
        display: none
    }
}
</style>