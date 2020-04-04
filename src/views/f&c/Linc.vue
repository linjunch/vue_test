<template>
  <div id="linc">
    <h3>this is chirldren!</h3>
    <p>{{ str }}</p>
    <p>{{ str }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'linc',
  props: {
    str: {
      type: String,
      default: 'xx'
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
