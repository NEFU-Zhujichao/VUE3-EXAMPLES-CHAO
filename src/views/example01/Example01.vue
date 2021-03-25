<template>
  <div>
    <div>Welcome</div>
    <div>{{ msg }}</div>
    <button type="button" @click="changeMsg">changeMsg</button>
    <br />
    <button type="button" @click="addAddress">addAddress</button>
    <div>{{ user.name }} / {{ replace }} / {{ user.address }}</div>
    <div>
      {{ user.name }} / {{ replace2(user.insertTime) }} / {{ user.address }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    msg: "Hello World",
    user: {
      name: "chao",
      insertTime: "2021-3-14T9:14:20",
      address: ""
    }
  }),
  methods: {
    changeMsg() {
      this.msg = "Hello Chao";
    },
    addAddress() {
      this.user.address = "哈尔滨";
    }
  },
  computed: {
    replace(): string {
      return this.user.insertTime.replace("T", " ");
    },
    replace2() {
      return (date: string) => date.replace("T", " ");
    }
  }
});
</script>
