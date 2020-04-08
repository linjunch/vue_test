<template>
  <div id="myInfo">
    <el-button @click="logInfo">showinfo</el-button>
    <el-button @click="logId">showid</el-button>
  </div>
</template>

<script>
export default {
  name: 'myInfo',
  data() {
    return {};
  },
  methods: {
    logInfo() {
      console.log(this.info);
    },
    logId() {
      console.log(this.id);
    }
  },
  computed: {
    info() {
      return this.$route.query;
    },
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style lang="less" scoped>
#myInfo {
  text-align: center;
}
</style>
