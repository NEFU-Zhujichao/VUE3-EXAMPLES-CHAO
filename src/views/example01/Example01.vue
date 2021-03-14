<template>
  <div>
    <div>Welcome</div>
    <div>{{ msg }}</div>
    <button type="button" @click="changeMsg">click</button>
    <div>{{ user.name }} / {{ replace }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    msg: "Hello World",
    user: {
      name: "chao",
      insertTime: "2021-3-14T9:14:20"
    }
  }),
  methods: {
    changeMsg() {
      this.msg = "Hello Chao";
    }
  },
  computed: {
    replace(): string {
      return this.user.insertTime.replace("T", " ");
    }
  }
});
</script>
