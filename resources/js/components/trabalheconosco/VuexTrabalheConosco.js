import axios from "axios"

export default {
    state: {
        trabalhe:{},
        email: '',
      },
      mutations: {
        SUBMITTRABALHE(state,inputs){
          state.trabalhe = inputs
        },
        ENVIAR_EMAIL_TRABALHE(state, email) {
          state.email = email
      },
      },
      actions: {
        SubmitTrabalhe(context, data){
          context.commit('SUBMITTRABALHE',data)
        } ,
        EnviarEmailTrabalhe(context, data) {        
            // console.log(data)
          let url = '/api/send/trabalheconosco';        
          axios
              .post(url, data)
                .then(response => context.commit('ENVIAR_EMAIL_TRABALHE', response.data))
                .catch(function (error) {
                  console.log(response.data);
                });
      },
      }
}