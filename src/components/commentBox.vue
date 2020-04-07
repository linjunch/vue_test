<template>
  <div class="commentBox">
    <div>
      name：<el-input type="text" v-model="name" style="width:200px" />
      评论：<el-input type="text" v-model="info" style="width:200px" />
      <el-button @click="add">添加评论</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commentBox',
  data() {
    return {
      name: '',
      info: ''
    };
  },
  props: {
    item: Object
  },
  methods: {
    add() {
      this.$emit('add', this.name, this.info);
      this.name = '';
      this.info = '';
    }
  }
};
</script>
<style lang="less"></style>
