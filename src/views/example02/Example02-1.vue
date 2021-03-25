<template>
  <div>
    <div>
      sid: {{ sid }}
      <br />
      hid: {{ hid }}
      <br />
      <p>通过$route.params.hid取值</p>
      {{ $route.params.hid }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    console.log(props.hid);
  }
});
</script>
