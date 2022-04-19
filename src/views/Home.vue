<template>
  <div class="fillcontain">
    <v-header></v-header>
    <span>这里是首页</span>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    "v-header": Header,
  },
  data() {
    return {
      // me: JSON.parse(localStorage.getItem("me")),
    };
  },
  methods: {

  },
};
</script>