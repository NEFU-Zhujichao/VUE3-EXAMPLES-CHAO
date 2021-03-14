<template>
  <div id="app">
    <sidebar id="sidebar" />
    <div id="router">
      <h1>Hello Vue3.0!</h1>
      <router-view :key="$route.path" />
    </div>
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
</style>
