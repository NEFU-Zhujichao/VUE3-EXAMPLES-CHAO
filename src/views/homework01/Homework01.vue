<template>
  <div class="container">
    <div class="container-left">
      <span :style="refScores >= sumScores ? reachedStyle : unreachedStyle">
        {{ refScores }}
      </span>
      / {{ sumScores }}
      <div>
        <template v-for="(c, index) in courses" :key="index">
          <label>
            <input
              type="checkbox"
              v-model="refSelectedCoures"
              :value="{ name: c.name, term: c.term, point: c.point }"
            />
            {{ c.name }} - {{ c.point }} ({{ c.term }})
          </label>
          <br />
        </template>
      </div>
    </div>
    <div class="container-right">
      <ul v-for="(c, index) in refSelectedCoures" :key="index">
        <li>{{ c.name }} - {{ c.point }} ({{ c.term }})</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, watch } from "vue";
import { Course, listCourses } from "@/datasource/Types";
function cmp(a: Course, b: Course) {
  return a.term - b.term;
}
const selectedCourses: Course[] = [];
export default defineComponent({
  setup() {
    const courses = listCourses();
    const refSelectedCoures: Ref<Course[]> = ref(selectedCourses);
    const refScores = ref(0);
    const sumScores = 12;
    watch(refSelectedCoures, () => {
      let sum = 0;
      refSelectedCoures.value.sort(cmp);
      refSelectedCoures.value.forEach(c => (sum += c.point));
      refScores.value = sum;
    });
    const reachedStyle = { color: "green" };
    const unreachedStyle = { color: "red" };
    return {
      courses,
      refScores,
      sumScores,
      refSelectedCoures,
      reachedStyle,
      unreachedStyle
    };
  }
});
</script>
<style scoped>
li {
  list-style-type: none;
}
div.container {
  width: 700px;
  display: flex;
  flex-direction: row;
}
div.container-left {
  width: 300px;
  border: 1px solid goldenrod;
}
div.container-right {
  width: 300px;
  border: 1px solid goldenrod;
}
</style>
