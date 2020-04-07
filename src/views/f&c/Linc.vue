<template>
  <div id="linc">
    <h3>this is chirldren!</h3>
    <!-- 1.父组件将 iptvalue 传给子组件 子组件将iptvalue与input的value动态绑定 -->
    <!-- 2.子组件的@input事件会触发子组件的方法setValue -->
    <!-- 3.setValue通过this.$emit传递给父组件的自定义事件save，并将event一起传递过去 -->
    <!-- 4.父组件的自定义事件save被触发，父组件方法setIptvalue被触发，将event赋值给iptvalue -->
    <!-- 5.iptvalue发生改变，子组件动态绑定也跟着改变 -->
    <el-input :style="{ width: '200px' }" :value="iptvalue" @input="setValue" />
    <!--这里可以直接@input="$emit（'save',$event）"触发父组件的自定义事件save  -->
    <el-button @click="getcomponent">get father component</el-button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'linc',
  props: {
    iptvalue: String
  },
  data() {
    return {
      msg: 'this is child'
    };
  },
  methods: {
    setValue(event) {
      this.$emit('save', event);
    },
    show() {
      console.log(this.msg);
    },
    getcomponent() {
      // console.log(this.$parent);
      // this.$parent.iptvalue = '123';
      // this.$parent.showIptvalue();
      // console.log(this.$parent.$parent);
      console.log(this.$root);
    }
  }
};
</script>

<style lang="less" scoped>
#linc {
  text-align: center;
}
</style>
