<template>
  <div id="linf">
    <h2>this is father!</h2>
    <!-- 子组件的$emit会触发父组件的自定义事件save 然后save会触发父组件的方法 -->
    <Linc @save="setIptvalue" :iptvalue="iptvalue" ref="lincRef" />
    <h2>father iptvalue is :{{ iptvalue }}</h2>
    <button @click="logLinc">get linc</button>
  </div>
</template>

<script type="text/javascript">
import Linc from './Linc';
export default {
  name: 'linf',
  data() {
    return {
      iptvalue: ''
    };
  },
  methods: {
    setIptvalue(value) {
      this.iptvalue = value;
    },
    showIptvalue() {
      console.log(this.iptvalue);
    },
    logLinc() {
      console.log(this.$children);
      // 所有子组件组成的数组，通过索引获取目标组件
      console.log(this.$refs);
      // 所有ref组成的对象，通过绑定的ref名获取目标组件

      // 目标组件中的data属性和methods中的方法直接通过.属性名/方法名获取调用
      // data中的属性允许直接修改
      this.$refs.lincRef.show();
      console.log(this.$refs.lincRef.msg);

      // 目标组件中的props的属性得通过.$props.属性名获取调用
      // props中的属性不可以直接修改（可以操作，但会报警告）
      console.log(this.$refs.lincRef.$props.iptvalue);
    }
  },
  components: {
    Linc
  }
};
</script>

<style lang="less" scoped>
#linf {
  text-align: center;
}
</style>
