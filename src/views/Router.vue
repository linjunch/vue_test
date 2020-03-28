<template>
  <div class="router">
    <router-link to="/router/comment">评论</router-link> |
    <router-link to="/router/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {};
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
