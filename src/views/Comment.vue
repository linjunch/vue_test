<template>
  <div class="comment">
    <CommentBox @add="addItem" ref="myCommentBox" />
    <!-- <el-button @click="add">添加评论</el-button> -->
    <br />
    <div>
      <List
        :item="item"
        @delete="deleteItem"
        v-for="item in msgList"
        :key="item.name"
      />
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import CommentBox from "@/components/commentBox.vue";

export default {
  name: "Comment",
  data() {
    return {
      msgList: [{ name: "lin", info: "干他妈的React" }]
    };
  },
  components: {
    List,
    CommentBox
  },
  methods: {
    // 通过$emit传递参数给父组件触发
    addItem(name, info) {
      this.msgList.push({ name, info });
    },
    // 通过$emit传递触发事件给父组件 然后根据ref获取组件的data
    add() {
      // const { name, info } = this.$refs.myCommentBox;
      this.msgList.push({
        name: this.$refs.myCommentBox.name,
        info: this.$refs.myCommentBox.info
      });
      this.$refs.myCommentBox.name = "";
      // name = "";
      this.$refs.myCommentBox.info = "";
      // info = "";
    },
    deleteItem(name) {
      this.msgList = this.msgList.filter(item => item.name !== name);
    }
  }
};
</script>
<style lang="less"></style>
