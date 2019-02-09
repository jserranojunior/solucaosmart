<template>
    <div>
        <div class="container-fluid">
            <div class="row row-space">
                <div class="col-md-12 text-center">
                    <h5>CONTRATO DE CESSÃO DE QUOTAS DO PROJETO
                        <br> “{{proponente.projetos}}”
                    </h5>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <p>
                        <span class="font-weight-bold">
                  PASANAKU FAMILIA FELIZ- INCORPORACAO, CONSTRUCAO, CREDITOS MUTUOS,
                  ADMINISTRACAO DE FUNDOS E CORRESPONDENTE BANCARIO LTDA
                </span>, CNPJ n. 28.616.397/0001-60 com sede em Rua Doutor Costa Valente, 217 – 2 º andar – Brás – São Paulo – SP – CEP: 03052-000, neste ato representada por Bladimir Mamani Chuquimia, portador do RNE número Y266740-F
                        e inscrito no CPF número 227.355.598-90 e Jaime Wilston Mamani Chuquimi portador do RNE Y269466-V e inscrito no CPF número 227.370.898-08, ambos diretores da empresa acima qualificada, doravante denominados
                        <span class="font-weight-bold">ADMINISTRADORES</span> , e de outro lado {{proponente.nome}}, data de nascimento, {{proponente.data_nascimento}} ,nacionalidade {{proponente.nacionalidade}}, estado civil: {{proponente.estado_civil}},
                        profissão {{proponente.profissao}}, portador do RNE número {{proponente.rne}} e inscrito no CPF número {{proponente.cpf}} , residente em {{proponente.logradouro}}, n° {{proponente.numero}}, bairro: {{proponente.bairro}} - CEP: {{proponente.cep}},complemento:
                        {{proponente.complemento}}, telefones: {{proponente.celular}} - {{proponente.telefone}}, E-MAIL: {{proponente.email}}, doravante denominada <span class="font-weight-bold">APORTADOR</span>, sendo assim, firma- se o presente CONTRATO
                        DE CESSÃO DE QUOTAS DO PROJETO “{{proponente.projetos}}”, conforme as cláusulas a seguir:
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 1ª – Do Objeto do Contrato</span>
                        <br>Por meio deste contrato, que firmam entre si os
                        <span class="font-weight-bold">ADMINISTRADORES</span> e o <span class="font-weight-bold">APORTADOR</span>, regula–se a transferência de {{proponente.valor_aporte}} quotas de titularidade dos Administradores.
                        <br>
                        <br>§ 1º O
                        <span class="font-weight-bold">APORTADOR</span> declara, ainda estar ciente sobre o projeto “ {{proponente.projetos}}”.
                        <br> O tipo de pagamento será do tipo: {{proponente.forma_pagamento}}
                        <br>
                        <span v-if="proponente.transferencia">O pagamento será feito atravez de transferência: {{proponente.transferencia}}</span>
                        <br>
                        <span v-if="proponente.deposito">O pagamento será feito atravez de deposito: {{proponente.deposito}}</span>
                        <br><br> Observações: {{proponente.observacoes}}
                        <br>
    
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 2ª – Do Valor</span>
                        <br> Para a transferência das quotas, as partes ajustam o valor certo de {{proponente.valor_aporte}}, valor a ser aportado nas seguintes condições: ___________________________________
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 3ª – Da Transferência Definitiva das Quotas</span>
                        <br> As partes se comprometem reciprocamente a acompanhar todos os encaminhamentos do projeto e fornecer todos os documentos necessários para seu registro na Junta Comercial.
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 4ª – Dos Direitos e Obrigações</span>
                        <br> Os ADMINISTRADORES: A)Transferir as quotas livres e desembaraçadas de qualquer ônus; B)Informar o APORTADOR sobre qualquer ônus reais, judiciais ou extrajudiciais ou quaisquer outros fatos, ações ou medidas administrativas que
                        possam por ventura atingir as quotas cedidas; C)Realizar as diligencias e prestar toda a assistência ao APORTADOR para a transferência definitiva das quotas. O APORTADOR: A)Adimplir suas obrigações no tempo e modo acordados neste contrato;
                        B)Fornecer todos os documentos pessoais para a transferência; C)Informar os administradores sobre a insolvência civil, recuperação judicial ou extrajudicial, falência ou de qualquer ação ou execução declarada contra si.
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 5ª – Dos Rendimentos</span>
    
                        <br>
                        <br> a)O APORTADOR terá a rentabilidade de 1 % ao mês até a viabilidade da empresa.
                        <br>
                        <br> b)O APORTADOR terá sua participação nos lucros após o período de rentabilidade.
                        <br>
                        <br>
                        <span class="font-weight-bold">Cláusula 6ª – Da Desistência</span>
                        <br>Os administradores se comprometem a devolver o valor aportado integralmente em caso de desistência por parte do APORTADOR,
                        <span class="font-weight-bold">
                  desde que comunicado com 60 dias de antecedência e
                  por escrito aos ADMINISTRADORES.
                </span>
                        <br>
                        <br>Por estarem cientes, as partes assinam em duas vias o presente instrumento particular na presença de duas testemunhas.
                        <br>
                        <br> São Paulo ___ de ___________________ de __________.
                    </p>
                </div>
            </div>
            <div class="row row-space justify-content-center">
                <div class="col-md-5">___________________________
                    <br>Pasanaku Familia Feliz
                    <br>CNPJ: 28.616.397/0001-60
                </div>
    
                <div class="col-md-5 text-right">_________________________
                    <br> {{proponente.nome}}
                    <br> {{proponente.cpf}}
                </div>
            </div>
            <div class="row row-space justify-content-center">
                <div class="col-md-5">___________________________
                    <br>TESTEMUNHA 1
                </div>
                <div class="col-md-5 text-right">_________________________
                    <br>TESTEMUNHA 2
                </div>
            </div>
    
            <div class="row row-space justify-content-center">
                <div class="col-md-10 text-right">
                    <div class="btn btn-primary" @click="print()">IMPRIMIR</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Contrato",
    data(){
        return{
            body:'',
        }
    },
    computed: {
        ...mapState({
            proponente: state => state.Projetos.proponentes
        })
    },
    mounted() {
        console.log(this.proponente.nome);
        this.body = `<div class="container"></div>`
    },
    methods: {
        print() {
            window.print();
        }
    }
};
</script>

<style scoped>

</style>