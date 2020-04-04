<template>
  <div id="linf">
    <h2>this is father!</h2>
    <Linc />
  </div>
</template>

<script type="text/javascript">
import Linc from './Linc';
export default {
  name: 'linf',
  data() {
    return {
      str: 'lin'
    };
  },
  methods: {},
  components: {
    Linc
  }
};
</script>

<style lang="less" scoped></style>
