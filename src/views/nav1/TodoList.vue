<template>
  <div id="TodoList">
    <div v-if="list.length">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>
              <span class="indexSpan">{{ index + 1 }}</span>
            </td>
            <td>
              <span class="nameSpan">《 {{ item.name }} 》</span>
            </td>
            <td class="datetd">
              {{ item.date }}
            </td>
            <td>{{ item.price | delPrice }}</td>
            <td>
              <el-button @click="sub(index)" :disabled="item.num <= 1"
                >-</el-button
              >
              {{ item.num }}
              <el-button @click="add(index)">+</el-button>
            </td>
            <td>
              <el-button @click="del(index)">删除</el-button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <h2>总价格： {{ totalPrice | delPrice }}</h2>
    </div>
    <div v-else class="esle">内容为空</div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      list: [
        { name: '算法导论', date: '2006-9', price: 85, num: 0, id: 'book001' },
        {
          name: 'UNIx编程艺术',
          date: '2006-2',
          price: 59,
          num: 0,
          id: 'book002'
        },
        { name: '编程珠玑', date: '2008-10', price: 39, num: 0, id: 'book003' },
        { name: '代码大全', date: '2006-3', price: 128, num: 0, id: 'book004' }
      ]
    };
  },
  methods: {
    add(index) {
      this.list[index].num++;
    },
    sub(index) {
      this.list[index].num--;
    },
    del(index) {
      confirm('are you sure to delete this item?') &&
        this.list.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      return this.list.reduce((total, cur) => total + cur.price * cur.num, 0);
    }
  },
  filters: {
    delPrice(price) {
      return `￥${price.toFixed(2)}`;
    }
  }
};
</script>

<style lang="less" scoped>
#TodoList {
  text-align: center;
}
// table {
//   margin: 0 auto;
//   font-size: 20px;
//   tr {
//     margin: 0 auto;
//     th,
//     td {
//       border: 1px solid #ccc;
//       text-align: center;
//       height: 100%;
//       padding: 20px;
//     }
//     th {
//       font-weight: 600;
//     }
//   }
// }
table {
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
h2 {
  font-size: 24px;
  font-weight: 600;
}
.esle {
  font-size: 40px;
  font-weight: 600;
}
</style>
