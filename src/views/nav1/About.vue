<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label>
      id:
      <el-input style="width:200px" v-model="id" v-color="'deepskyblue'" />
    </label>
    <label>
      name:
      <el-input style="width:200px" v-model="name" @keyup.enter.native="add" />
    </label>
    <el-button @click="add">添加</el-button>
    <label>
      关键字查找：
      <el-input style="width:200px" v-model="keyWorld" v-focus />
    </label>
    <div :class="['tableList']">
      <el-table :data="search()" style="width: 100%">
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button @click="del(scope.$index)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <input @keyup.enter="logxx" v-model="xx" /> -->
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name | nameFormat('Mr.') }}
      </li>
    </ul>
  </div>
</template>
<script>
// import Vue from "vue";
// Vue.filter("nameFormat", function(name, arg) {
//   return arg + name;
// });

export default {
  name: 'About',
  data() {
    return {
      xx: '',
      id: '',
      name: '',
      keyWorld: '',
      list: [
        { id: '1', name: 'lin' },
        { id: '2', name: 'lu' },
        { id: '3', name: 'li' },
        { id: '4', name: 'huang' }
      ]
    };
  },
  methods: {
    add() {
      const newItem = {
        id: this.id,
        name: this.name
        // ctime: new Date()
      };
      if (this.id && this.name) {
        this.list.push(newItem);
        this.id = '';
        this.name = '';
      }
    },
    del(index) {
      this.list.splice(index, 1);
      // console.log(index);
    },
    search() {
      return this.list.filter(item => item.name.includes(this.keyWorld));
    },
    logxx() {
      console.log(this.list);
    }
  },
  filters: {
    nameFormat(name, arg) {
      return arg + name;
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.children[0].focus();
      }
    },
    color: {
      bind(el, binding) {
        el.children[0].style.color = binding.value;
      }
    }
  }
};
</script>
<style lang="less">
.tableList {
  // display: inline-block;
  width: 540px;
  margin: 0 auto;
}
.about {
  text-align: center;
}
</style>
