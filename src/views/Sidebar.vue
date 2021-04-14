<template>
  <div>
    <ul>
      <li>
        <router-link to="/example01">Welcome</router-link>
      </li>
      <li>
        props
        <ul>
          <li>
            <router-link to="/example02/students/12/homeworks/72">
              sid:12 hid:72
            </router-link>
          </li>
          <li>
            <router-link to="/example02/students/22/homeworks/82">
              sid:22 hid:82
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/example03">composition-api</router-link>
      </li>
      <li>
        <router-link to="/homework01">homework01</router-link>
      </li>
      <li>
        <router-link to="/example04">vuex&mutation&action</router-link>
      </li>
      <li>
        <router-link to="/homework02">
          Homework - 2
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  margin-left: 10px;
}
ul li ul {
  margin-left: 30px;
}
</style>
