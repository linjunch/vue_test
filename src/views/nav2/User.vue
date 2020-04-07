<template>
  <div id="user">
    <h2>用户：{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#user {
  display: flex;
  justify-content: center;
}
</style>
