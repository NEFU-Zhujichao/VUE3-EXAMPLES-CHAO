import { User } from "@/datasource/Types";
import { ActionTree, createStore, MutationTree } from "vuex";
import * as vxt from "@/datasource/VuexTypes";
export interface State{
  user?:User
}
const myState:State = {
  user:{
    id: 1,
    name: "xiaochao",
    insertTime: "2021-3-25"
  }
}
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state,user:User) => state.user = user
}
const myActions: ActionTree<State,State> = {
  [vxt.UPDATE_USER]: ({commit},data:User) => {
    setTimeout(() => commit(vxt.UPDATE_USER,data),2000)
  }
}
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
