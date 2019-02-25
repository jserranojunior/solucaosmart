import axios from "axios"

export default {
    state: {
        clube:{},
        email: '',
      },
      mutations: {
        SUBMITPROPCLUBE(state,inputs){
          state.clube = inputs
        },
        ENVIAR_EMAIL_CLUBE(state, email) {
          state.email = email
      },
      },
      actions: {
        SubmitPropClube(context, data){
          context.commit('SUBMITPROPCLUBE',data)
        } ,
        EnviarEmailClube(context, data) {        
          let url = '/api/send/clube';        
          axios
              .post(url, data)
                .then(response => context.commit('ENVIAR_EMAIL_CLUBE', response.data))
                .catch(function (error) {
                  console.log(error);
                });
      },
      }
}