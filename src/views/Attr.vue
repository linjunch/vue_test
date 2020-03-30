<template>
  <div class="router">
    <el-input v-model="str1" /> + <el-input v-model="str2" /> =
    <el-input v-model="result" />
    <router-link to="/attr/comment">评论</router-link> |
    <router-link to="/attr/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      currentPage: "",
      str1: "",
      str2: ""
    };
  },
  computed: {
    result() {
      return this.str1 + this.str2;
    }
  },
  watch: {
    "$route.path": function() {
      console.log(this.$route.path);
    }
  },
  props: {},
  methods: {}
};
</script>
<style lang="less">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-active {
    // color: #42b983;
    color: deeppink;
  }
}
</style>
