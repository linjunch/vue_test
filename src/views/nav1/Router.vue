<template>
  <div class="router">
    <router-link to="/router/comment" exact>评论</router-link> |
    <router-link to="/router/about" exact>About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Router',
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.router {
  text-align: center;
}
.router-link-exact-active {
  color: deeppink;
}
</style>
