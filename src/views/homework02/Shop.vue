<template>
  <div>
    <h3 style="margin: 0">{{ shop?.name }}</h3>
    <div style="padding: 5px" v-for="(item, index) of shop?.items" :key="index">
      <img :src="item.url" alt="" style="width: 200px; padding: 5px" />
      <div class="card">
        {{ item.name }}
        <br />
        价格：{{ item.price }}
        <br />
        月销量：{{ item.sales }}
        <br />
        <button @click="remove(item)">-</button>
        {{ orderQ(item) }}
        <button @click="add(item)">+</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { GET_SHOP } from "@/store/VuexTypes";
import { State } from "@/store";
export interface Item {
  id?: number;
  name?: string;
  price?: number;
  sales?: number; // 月销量
  url?: string;
}
export default defineComponent({
  props: {
    sid: String // 路由传参，只能是字符串
  },
  setup(props) {
    const store = useStore<State>();
    // 绑定state数据
    const shop = computed(() =>
      store.state.shopCache.find(sh => sh.id == props.sid)
    );
    // 如果不存在(为空)，则模拟异步加载数据
    !shop.value && store.dispatch(GET_SHOP, props.sid);
    // orders数组对象是响应式，添加移除元素是响应式
    const orders = store.state.orders;
    const add = (item: Item) => {
      let order = orders.find(o => o.item.id == item.id);
      if (order) {
        order.quantity++;
      } else {
        // 对应item的order不存在，创建订单对象，加入订单列表
        // 由于没有修改orders数组对象本身，可以不通过vuex事件
        order = { quantity: 1, item: item };
        orders.push(order);
      }
    };
    const remove = (item: Item) => {
      const order = orders.find(o => o.item.id == item.id);
      if (order) {
        const q = order.quantity--;
        if (q == 0) {
          orders.splice(orders.indexOf(order), 1);
        }
      }
    };
    const orderQ = computed(() => (item: Item) => {
      const o = orders.find(o => o.item.id == item.id);
      return o ? o.quantity : 0;
    });
    return {
      shop,
      orderQ,
      add,
      remove
    };
  }
});
</script>
<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
</style>
