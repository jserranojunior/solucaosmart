import axios from "axios"

export default {
    state: {
        proponentes:{}
      },
      mutations: {
        SUBMITPROP(state,inputs){
          state.proponentes = inputs
        }
      },
      actions: {
        SubmitProp(context, data){
          context.commit('SUBMITPROP',data)
        }
      }
}