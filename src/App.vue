<template>
  <div id="app">
    <div class="navBox">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/axios">Axios</router-link>
      <router-link to="/comment">Comment</router-link>
      <router-link to="/attr">Attr</router-link>
      <router-link to="/router">Router</router-link>
      <router-link to="/lin">Lin</router-link>
      <router-link to="/todolist">Todolist</router-link>
      <router-link to="/vuexx">Vuexx</router-link>
      <router-link to="/vModel">v-model</router-link>
      <router-link :to="{ name: 'User', params: { userId: 123 } }"
        >我的</router-link
      >
      <router-link :to="{ path: '/myinfo', query: info }">
        我的信息
      </router-link>
      <router-link to="/linxx">linxx</router-link>
      <router-link to="/lincc">lincc</router-link>
      <router-link to="/linf">linf</router-link>
      <router-link to="/slotf">slotf</router-link>
    </div>

    <!-- <transition enter-active-class="animated lightSpeedIn"> -->

    <div class="showBox">
      <keep-alive exclude="Axios,About"><router-view /></keep-alive>
    </div>

    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      flag: false,
      info: {
        name: 'lin',
        age: 23
      }
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    }
    // goHome() {
    //   // 利用的堆栈的形式跳转路由
    //   this.$router.push("/");
    //   // 替换当前路由
    //   this.$router.replace("/");
    //   // 相当于history.go()
    //   this.$router.go(-1);
    //   // 相当于history.back()
    //   this.$router.back();
    //   // 相当于history.forward()
    //   this.$router.forward();
    // }
  }
};
</script>

<style lang="less">
@import url('~@/assets/style/base.less');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: flex-start;
  .navBox {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    a {
      display: block;
      width: 200px;
      height: 30px;
      line-height: 30px;
      padding: 5px;
      border: 1px solid #ccc;
    }
  }
  .showBox {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    min-height: 800px;
  }
}

.router-link-active {
  // color: #42b983;
  color: skyblue;
}
</style>
