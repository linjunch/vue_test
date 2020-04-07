<template>
  <div id="app">
    <div class="navBox">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/axios">Axios</router-link>
      <router-link to="/comment">Comment</router-link>
      <router-link to="/attr" exact>Attr</router-link>
      <router-link to="/router">Router</router-link>
      <router-link to="/lin">Lin</router-link>
      <router-link to="/todolist">Todolist</router-link>
      <router-link to="/vuexx">Vuexx</router-link>
      <router-link to="/vModel">v-model</router-link>
      <router-link to="/user/lin">我的</router-link>
      <router-link to="/myinfo">我的信息</router-link>
      <router-link to="/linxx">linxx</router-link>
      <router-link to="/lincc">lincc</router-link>
      <router-link to="/linf">linf</router-link>
      <router-link to="/slotf">slotf</router-link>
    </div>

    <!-- <transition enter-active-class="animated lightSpeedIn"> -->
    <div class="showBox"><router-view /></div>
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

/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html,
body {
  width: 100%;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Arial, 'Microsoft YaHei', serif;
  font-size: 14px;
  font-weight: normal;
  color: #4c4c4c;
}

html,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* custom */
a {
  color: #333;
  text-decoration: none;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

li {
  list-style: none;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  border-radius: 6px;
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  border-radius: 6px;
  -webkit-border-radius: 6px;
}
</style>
