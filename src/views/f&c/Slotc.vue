<template>
  <div id="slotc">
    <h2>this is slotc</h2>
    <!-- <slot>
      <h2>this is default value</h2>
      <p>when you has no commit a value It will be show</p>
      <p>when you has commit a value It will be hiden</p>
    </slot> -->
    <!-- <h2><slot name="header">this is header</slot></h2>
    <p><slot name="main">this is main</slot></p>
    <h4><slot name="footer">this is footer</slot></h4>
    <el-button><slot>this is default name</slot></el-button> -->
    <slot :list="list" name="xx">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'slotc',
  data() {
    return {
      list: ['唱', '跳', 'rap', '篮球']
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#slotc {
  text-align: center;
}
</style>
