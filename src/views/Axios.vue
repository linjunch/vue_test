<template>
  <div class="about">
    <label
      >name:
      <el-input
        style="width:200px"
        v-model="name"
        @keyup.enter.native="add(name)"
    /></label>
    <el-button @click="add(name)">添加</el-button>
    <label>
      关键字查找：
      <el-input style="width:200px" v-model="keyWorld" />
    </label>
    <div :class="['tableList']">
      <el-table :data="search()" style="width: 100%">
        <el-table-column prop="id" label="id" width="200"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="200">
        </el-table-column>
        <el-table-column prop="ctime" label="时间" width="200">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="del(scope.row.id)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getList, addItem, deleteItem } from "@/services";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      keyWorld: "",
      list: []
    };
  },
  methods: {
    add(name) {
      addItem(name).then(res => {
        // console.log(response);
        if (res.status === 200) {
          this.getAllList();
          this.name = "";
        }
      });
    },
    del(id) {
      deleteItem(id).then(res => {
        if (res.status === 200) {
          this.getAllList();
        }
      });
    },
    getAllList() {
      getList().then(res => {
        // console.log(res);
        if (res.status === 200) {
          this.list = res.data.message;
        }
      });
    },
    search() {
      return this.list.filter(item => item.name.includes(this.keyWorld));
    }
  },
  created() {
    this.getAllList();
  }
};
</script>
<style lang="less">
.tableList {
  // display: inline-block;
  width: 800px;
  margin: 0 auto;
}
</style>
