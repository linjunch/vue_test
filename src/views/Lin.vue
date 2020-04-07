<template>
  <div id="lin">
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="item.game"
        :class="{ active: item.isActive }"
        @click="selectThis(index)"
      >
        {{ item.game }}
      </li>
    </ul>
    <!-- <div>
      <ul class="list">
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: item.isActive }"
          @click="toggleClass(index)"
          :style="{ fontSize: '50px' }"
        >
          {{ item.game }}
        </li>
      </ul>
      <div>{{ getFullName() }}</div>
      <div>{{ getFullName() }}</div>
      <div>{{ fullName }}</div>
      <div>{{ fullName }}</div>
      <div>{{ gameString }}</div>
      <el-button @click="change">change</el-button>
    </div> -->
    <!-- <div>
      <el-button @click.stop="noParam">没有参数</el-button>
      <el-button @click.prevent="noParam">没有参数</el-button>
      <el-button @click.self="noParam">没有参数</el-button>
      <el-button @click.once="noParam">没有参数</el-button>
      <el-button @click="oneParam('123')">一个参数</el-button>
      <el-button @click="event">事件属性参数</el-button>
      <el-button @click="eventAndParams($event, '123')"
        >事件属性参数+自定义参数</el-button
      >
    </div> -->
    <!-- <div>
      <h2 v-show="flag">{{ str1 }}</h2>
      <h2 v-if="flag">{{ str1 }}</h2>
      <h2 v-else>{{ str2 }}</h2>
      <el-button @click="toggle">toggle</el-button>
    </div> -->
    <!-- <div>
      <ul class="list">
        <li v-for="item in list" :key="item.game">{{ item.game }}</li>
      </ul>
      <ul class="list">
        <li v-for="(item, index) in list" :key="item.game">
          {{ index + 1 }}.{{ item.game }}
        </li>
      </ul>
      <div>=========================================================</div>
      <ul class="list">
        <li v-for="value in obj" :key="value">
          {{ value }}
        </li>
      </ul>
      <ul class="list">
        <li v-for="(value, key) in obj" :key="key">{{ key }}:{{ value }}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// export default {
//   name: "lin",
//   data() {
//     return {
//       list: ["dnf", "lol", "mc", "ow"],
//       currentList: []
//     };
//   },
//   methods: {
//     selectThis(value) {
//       const index = this.currentList.indexOf(value);
//       index > -1
//         ? this.currentList.splice(index, 1)
//         : this.currentList.push(value);
//     }
//   }
// };

export default {
  name: "lin",
  data() {
    return {
      list: [
        { game: "lol", isActive: false },
        { game: "dnf", isActive: false },
        { game: "ow", isActive: false },
        { game: "mc", isActive: false }
      ]
      // list: [
      //   { game: "lol", id: "id001" },
      //   { game: "dnf", id: "id002" },
      //   { game: "ow", id: "id003" },
      //   { game: "mc", id: "id004" }
      // ],
      // obj: {
      //   name: "lin",
      //   age: "18",
      //   game: "炉石"
      // },
      // // firstName: "lin",
      // // lastName: "ch",
      // str1: "if flag is true, i am show",
      // str2: "if flag is false, i am show",
      // flag: true
    };
  },
  methods: {
    // toggle() {
    //   this.flag = !this.flag;
    // }
    // toggleClass(index) {
    //   const item = this.list[index];
    //   item.isActive = !item.isActive;
    //   this.$set(this.list, index, item);
    //   console.table(this.list);
    // },
    // getFullName() {
    //   console.log("this is methods"); // 调用n次 输出n次
    //   return this.firstName + this.lastName;
    // },
    // change() {
    //   this.lastName = "jc";
    // }
    // noParam() {
    //   console.log("no params no event");
    // },
    // oneParam(x) {
    //   console.log(x);
    // },
    // event(event) {
    //   console.log(event);
    // },
    // eventAndParams(event, x) {
    //   console.log(event);
    //   console.log(x);
    // }
    selectThis(index) {
      this.list[index].isActive = !this.list[index].isActive;
    }
  },
  computed: {
    // fullName() {
    //   console.log("this is computed"); // 调用n次，输出1次
    //   return this.firstName + this.lastName;
    // },
    // gameString() {
    //   return this.list.reduce((pre, cur) => {
    //     return pre + cur.game + "--";
    //   }, "--");
    // }
    // fullName: {
    //   set(name) {
    //     const nameArr = name.split(" ");
    //     this.firstName = nameArr[0];
    //     this.lastName = nameArr[1];
    //   },
    //   get() {
    //     return this.firstName + this.lastName;
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
#lin {
  text-align: center;
}
.fz40 {
  font-size: 40px;
}
.fw600 {
  font-weight: 600;
}
.skyblue {
  color: skyblue;
}
.list {
  margin: 0 auto;
  width: 500px;
  li {
    width: 500px;
    height: 100px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    &.active {
      background-color: skyblue;
    }
  }
}
</style>
