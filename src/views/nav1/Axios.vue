<template>
  <div class="axios">
    <div class="serchBox">
      <label
        >name:
        <!-- @keyup.enter.native="add(name)" -->
        <el-input style="width:200px" :value="info" @input="setInfo($event)"
      /></label>
      <el-button @click="add(info)">添加</el-button>
      <label>
        关键字查找：
        <el-input style="width:200px" v-model="keyWorld" />
      </label>
    </div>
    <div class="tableBox">
      <el-table :data="search()" style="width: 800px">
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
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Axiosx',
  data() {
    return {
      keyWorld: ''
    };
  },
  methods: {
    ...mapMutations('am', ['setInfo']),
    ...mapActions('am', ['add', 'del', 'getAll']),
    search() {
      return this.list.filter(item => item.name.includes(this.keyWorld));
    }
  },
  computed: { ...mapState('am', ['info', 'list']) },
  created() {
    this.getAll();
  }
};
</script>
<style lang="less">
.serchBox {
  display: flex;
  justify-content: center;
}
.tableBox {
  width: 800px;
  margin: 0 auto;
}
</style>
