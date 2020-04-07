<template>
  <div class="Vuexx">
    <h3>数量：{{ num }} <el-button @click="addNum(5)">添加</el-button></h3>
    <div>
      <span>请输入一个str：</span>
      <el-input :value="str" @input="setStr" style="width:200px" />
      <h2>字符：{{ computeStr }}</h2>
    </div>
    <div>
      <span>请输入一个value：</span>
      <el-input :value="value" @input="setValue" style="width:200px" />
      <h2>输出：{{ computeValue }}</h2>
    </div>
    <div>
      <span>请输入一个name：</span>
      <!-- @input的值只能用$event获取 -->
      <el-input
        :value="name"
        @input="setName({ name: $event })"
        style="width:200px"
      />
      <h2>称呼：{{ computeName('Mr.') }}</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Vuexx',
  data() {
    return {};
  },
  methods: {
    ...mapMutations('vm', ['addNum', 'setStr', 'setValue', 'setName'])
  },
  computed: {
    ...mapState('vm', ['num', 'str', 'name', 'value']),
    ...mapGetters('vm', ['computeStr', 'computeValue', 'computeName'])
  }
};
</script>
<style lang="less">
.countBox {
  font-size: 18px;
  font-weight: 600;
}
.Vuexx {
  text-align: center;
}
</style>
