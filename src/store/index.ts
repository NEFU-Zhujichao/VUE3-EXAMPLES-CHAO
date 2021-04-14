import { User } from "@/datasource/Types";
import axios from "@/axios";
import { ResultVO } from "@/mock";
import { ActionTree, createStore, MutationTree } from "vuex";
import * as vxt from "./VuexTypes";
import { getShop, listShops, Order, Shop } from "@/views/homework02/Homework02";
export interface State {
  user: User;
  // homework02
  shopList: Shop[];
  shopCache: Shop[];
  orders: Order[];
}
const myState:State = {
  user:{
    id: 1,
    name: "xiaochao",
    insertTime: "2021-3-25"
  },
  shopList: [],
  shopCache: [],
  orders: []
}
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state,user:User) => state.user = user,
  [vxt.LIST_SHOPS]: (state, data: Shop[]) => (state.shopList = data)
}
const myActions: ActionTree<State,State> = {
  [vxt.UPDATE_USER]: ({commit},data:User) => {
    setTimeout(() => commit(vxt.UPDATE_USER,data),2000)
  },
  [vxt.GET_HOME]: async ({ commit }) => {
    // 未捕获异常，请求失败在控制台输出信息
    const resp = await axios.get<ResultVO>("home");
    commit(vxt.LIST_COURSES, resp.data.data?.courses);
  },
  [vxt.LIST_SHOPS]: ({ commit, state }) => {
    if (state.shopList.length == 0) {
      setTimeout(() => {
        commit(vxt.LIST_SHOPS, listShops());
      }, 1000);
    }
  },
  [vxt.GET_SHOP]: ({ state }, sid: number) => {
    // 异步加载数据，并更新state中数据
    setTimeout(() => {
      // 返回可能为空，但强制断言结果不为空
      // state.shopCache.push(getShop(sid)!);
      // &&短路特性。如果shop为空直接结束，不为空执行右表达式
      const shop = getShop(sid);
      shop && state.shopCache.push(shop);
    }, 1000);
  }
}
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
