<template>
  <div>
    <button type="button" @click="changeUser">changeUser</button>
    <br />
    <button type="button" @click="changeMessage">changeMessage</button>
    <br />
    <div>
      <div>
        {{ messageRef }}
        <br />
        {{ userRef.id }} / {{ userRef.name }} /
        {{ formatDate(userRef.insertTime) }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
import { User } from "@/datasource/Types";
function useUser(user: Ref<User>) {
  const changeUser = () => {
    user.value.name = "composition-api";
  };
  const formatDate = computed(() => (date: string) => date.replace("T", " "));
  return {
    changeUser,
    formatDate
  };
}
function useMessage(message: Ref<string>) {
  const changeMessage = () => {
    message.value = "Hello Vue3.0";
  };
  return {
    changeMessage
  };
}
export default defineComponent({
  setup() {
    const user: User = {
      id: 1,
      name: "vue3.0",
      insertTime: "2021-3-18T12:20:30"
    };
    const userRef = ref(user);
    const messageRef = ref("Hello World");
    const { changeUser, formatDate } = useUser(userRef);
    const { changeMessage } = useMessage(messageRef);
    watch(userRef, (newUser, oldUser) =>
      alert(`新名字是${newUser.name} 旧名字是${oldUser.name}`)
    );
    return {
      messageRef,
      userRef,
      changeUser,
      formatDate,
      changeMessage
    };
  }
});
</script>
