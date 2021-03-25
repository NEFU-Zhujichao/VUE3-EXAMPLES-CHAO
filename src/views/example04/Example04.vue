<template>
  <div>{{ userS.id }} / {{ userS.name }}</div>
  <div>
    <input type="text" v-model="myUser.id" placeholder="id" />
    <br />
    <input type="text" v-model="myUser.name" placeholder="name" />
    <br />
    <button type="button" @click="updateUser">update</button>
    <button type="button" @click="asyncUpdateUser">asyncUpdate</button>
  </div>
</template>
<script lang="ts">
import { Store, useStore } from "vuex";
import { defineComponent, computed, Ref, ref } from "vue";
import { State } from "@/store";
import { User } from "@/datasource/Types";
import { UPDATE_USER } from "@/datasource/VuexTypes";
function useUser(myUser: Ref<User>, store: Store<State>) {
  const updateUser = () =>
    store.commit(UPDATE_USER, {
      id: myUser.value.id,
      name: myUser.value.name
    });
  const asyncUpdateUser = () =>
    store.dispatch(UPDATE_USER, {
      id: myUser.value.id,
      name: myUser.value.name
    });
  return {
    updateUser,
    asyncUpdateUser
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    const myUser = ref<User>({});
    const { updateUser } = useUser(myUser, store);
    const { asyncUpdateUser } = useUser(myUser, store);
    return {
      userS,
      myUser,
      updateUser,
      asyncUpdateUser
    };
  }
});
</script>
