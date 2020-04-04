<template>
  <div id="app">
    <!-- <el-button @click="toggle">toggle nav</el-button> -->
    <div id="nav" v-if="flag">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/axios">Axios</router-link>|
      <router-link to="/comment">Comment</router-link>|
      <router-link to="/attr">Attr</router-link>|
      <router-link to="/router" exac>Router</router-link>|
      <router-link to="/vuexx" exac>Vuexx</router-link>
    </div>
    <div id="nav2" v-else>
      <router-link to="/linxx">linxx</router-link>|
      <router-link to="/lincc">lincc</router-link>|
      <router-link to="/linf">linf</router-link>|
    </div>
    <!-- <transition enter-active-class="animated lightSpeedIn"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      flag: false
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav,
#nav2 {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      // color: #42b983;
      color: skyblue;
    }
  }
}
</style>
