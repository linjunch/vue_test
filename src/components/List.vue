<template>
  <div class="list">
    {{ item.name }}---------{{ item.info }}--------<el-button
      @click="del(item.name)"
      >删除</el-button
    >
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {};
  },
  props: {
    item: Object
  },
  methods: {
    del(x) {
      this.$emit("delete", x);
    }
  }
};
</script>
<style lang="less"></style>
