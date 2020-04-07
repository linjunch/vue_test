<template>
  <div id="vmodel">
    <!-- <div>
      changed by v-model:
      <el-input style="width:200px" v-model="model_value" />
    </div> -->
    <!-- <div>
      changed by @input
      <el-input style="width:200px" :value="ipt_value" @input="setValue" />
    </div> -->
    <!-- this is elementUI Radio -->
    <!-- <div>
      <el-radio v-model="el_sex" label="man">男</el-radio>
      <el-radio v-model="el_sex" label="woman">女</el-radio>
      <h2>el_sex: {{ el_sex }}</h2>
    </div> -->
    <!-- this is vue and js radio -->
    <!-- 当使用v-model时，无需添加name属性进行排斥（只能2选1，无法多选） -->
    <!-- <div>
      <input type="radio" value="男" v-model="sex" />男
      <input type="radio" value="女" v-model="sex" />女
      <h2>sex: {{ sex }}</h2>
    </div> -->
    <!-- this is elementUI checkbox -->
    <!-- el-checkbox 的model只接受Boolean值,点击后对原来的值进行取非操作（强转） -->
    <!-- <div>
      <el-checkbox v-model="numberflag"
        >this flag is number {{ numberflag }}
      </el-checkbox>
      <el-checkbox v-model="stringflag">
        this flag is string {{ stringflag }}
      </el-checkbox>
      <el-checkbox v-model="flag">
        this flag is boolean {{ flag }}
      </el-checkbox>
    </div> -->
    <!-- this is vue and js checkbox -->
    <!-- <div>
      <label for="agreement">
        <input type="checkbox" v-model="isAgree" id="agreement" />同意协议
      </label>
    </div> -->
    <!-- 多选框 -->
    <!-- <div>
      <input type="checkbox" v-model="flags" value="唱" />唱
      <input type="checkbox" v-model="flags" value="跳" />跳
      <input type="checkbox" v-model="flags" value="rap" />rap
      <input type="checkbox" v-model="flags" value="篮球" />篮球
    </div> -->
    <!-- <div>show your hobbies：{{ flags }}</div> -->
    <!-- this is elementUI select -->
    <!-- <div>
      <el-select v-model="currentValue" placeholder="请选择">
        <el-option
          v-for="item in cxk"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <h2>当前选择：{{ currentValue }}</h2>
    </div> -->
    <!-- this is vue and js select -->
    <!-- <div>
      <select name="cxk" v-model="selectItem">
        <option value="唱">唱</option>
        <option value="跳">跳</option>
        <option value="Rap">Rap</option>
        <option value="篮球">篮球</option>
      </select>
      <h2>你的选择是：{{ selectItem }}</h2>
    </div> -->
    <div>
      <!-- lazy 会在失去焦点或者按下回车才修改值 -->
      <input type="text" class="bd" v-model.lazy="lazy" />
      <h2>您输入的是：{{ lazy }}</h2>
      <!-- numner会让值变成number 非数字失去焦点会撤销  开始输入非数字失效 -->
      <input type="text" class="bd" v-model.number="number" />
      <h2>您输入的是：{{ typeof number }}</h2>
      <!-- 清除左右两边的空格 -->
      <input type="text" class="bd" v-model.trim="trim" />
      <h2>您输入的是：{{ trim }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vmodel',
  data() {
    return {
      // model_value: "",
      // ipt_value: "",
      // el_sex: "man",
      // sex: "男",
      // numberflag: 0,
      // stringflag: "xx",
      // flag: true,
      // isAgree: false,
      // flags: []
      // cxk: [
      //   { value: "唱", label: "选项：唱" },
      //   { value: "跳", label: "选项：跳" },
      //   { value: "Rap", label: "选项：Rap" },
      //   { value: "篮球", label: "选项：篮球" }
      // ],
      // currentValue: "唱",
      // selectItem: "唱"
      lazy: '',
      number: '',
      trim: ''
    };
  },
  methods: {
    // setValue(event) {
    //   this.ipt_value = event;
    // }
  }
};

const obj = {
  name: 'lin'
};

function copy() {
  return obj;
}
const obj1 = copy();
const obj2 = copy();
const obj3 = copy();
obj1.name = 'ch';
console.log(obj1); // ch
console.log(obj2); // ch
console.log(obj3); // ch

function clone() {
  return {
    name: 'lin'
  };
}
const clone1 = clone();
const clone2 = clone();
const clone3 = clone();
clone1.name = 'ch';
console.log(clone1); // ch
console.log(clone2); // lin
console.log(clone3); // lin
</script>

<style lang="less" scoped>
#vmodel {
  text-align: center;
}
// .bd {
//   border: 1px solid skyblue;
// }
</style>
