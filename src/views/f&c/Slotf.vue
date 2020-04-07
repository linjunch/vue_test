<template>
  <div id="slotf">
    <h2>this is slotf</h2>
    <Slotc>
      <template v-slot:xx="slotxx">
        <div>
          <span v-for="item in slotxx.list" :key="item">
            {{ item }}
          </span>
        </div>
      </template>
    </Slotc>
  </div>
</template>

<script type="text/javascript">
import Slotc from './Slotc';
export default {
  name: 'slotf',
  data() {
    return {};
  },
  methods: {},
  components: {
    Slotc
  }
};
</script>

<style lang="less" scoped>
#slotf {
  text-align: center;
}
</style>
