<template>
  <div class="home">
    <!-- :duration="200" 设置动画时间 但是animated动画时间固定  不会改变速度 duration过长 动画结束后 不动  duration过短 动画没结束就没动画了 -->
    <transition
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated flip"
    >
      <img alt="Vue logo" src="../../assets/logo.png" v-show="flag" />
    </transition>
    <br />
    <a href="" @click.prevent="page = 'login'">登陆</a> |
    <a href="" @click.prevent="page = 'register'">注册</a>|
    <a href="" @click.prevent="page = 'detail'">详情</a>
    <HelloWorld :msg="msg1" v-show="page === 'login'" />
    <HelloWorld :msg="msg2" v-show="page === 'register'" />
    <HelloWorld :msg="msg3" v-show="page === 'detail'" />
    <el-button @click="toggle">切换</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      flag: true,
      page: 'login',
      msg1: 'Welcome to Your Login page',
      msg2: 'Welcome to Your register page',
      msg3: 'Welcome to Your detail page'
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    }
  }
};
</script>
<style lang="less">
// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.8s ease;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
//   transform: translateY(-50px);
// }
.home {
  text-align: center;
}
</style>
