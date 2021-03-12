<template>
  <div>
    <div>Welcome</div>
    {{ msg }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    msg: "hello world"
  })
});
</script>
