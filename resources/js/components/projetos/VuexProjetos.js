import axios from "axios"

export default {
    state: {
        proponentes:{},
        email: '',
      },
      mutations: {
        SUBMITPROP(state,inputs){
          state.proponentes = inputs
        },
        ENVIAR_EMAIL(state, email) {
          state.email = email
      },
      },
      actions: {
        SubmitProp(context, data){
          context.commit('SUBMITPROP',data)
        } ,
        EnviarEmail(context, data) {        
          let url = '/solucaosmart/api/send';        
          axios
              .post(url, data)
                .then(response => context.commit('ENVIAR_EMAIL', response.data))
                .catch(function (error) {
                  console.log(error);
                });
      },
      }
}