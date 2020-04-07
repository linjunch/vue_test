<template>
  <div class="attr">
    <el-input v-model="str1" :style="{ width: '200px' }" /> +
    <el-input v-model="str2" :style="{ width: '200px' }" /> =
    <el-input v-model="result" :style="{ width: '200px' }" />
    <br />
  </div>
</template>

<script>
export default {
  name: 'Attr',
  data() {
    return {
      currentPage: '',
      str1: '',
      str2: ''
    };
  },
  computed: {
    result() {
      return this.str1 + this.str2;
    }
  },
  watch: {
    '$route.path': function() {
      console.log(this.$route.path);
    }
  },
  props: {},
  methods: {}
};
</script>
<style lang="less" scope>
.attr {
  text-align: center;
}
</style>
