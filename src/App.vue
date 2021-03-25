<template>
  <div id="app">
    <div>
      <h1>Hello Vue3.0</h1>
      <sidebar id="sidebar" />
    </div>
    <router-view id="router" :key="$route.path" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/Sidebar.vue";
export default defineComponent({
  components: {
    sidebar
  }
});
</script>
<style>
#app {
  margin-top: 10px;
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
h1 {
  border: 1px solid rgb(17, 0, 255);
}
</style>
