<template>
<div class="tab-ranking">
  <div class="tr-title">
    <span>下载排行榜</span>
  </div>
  <div class="tr-select" v-show="selectShow">
    <lm-select :options="options" @change="handleChange" :keyword="keyword" :defaultSelect = defaultSelect></lm-select>
  </div>
  <div class="tr-filter">
    <span v-for="item in filterData" @click="changeFilterData(item)" :class="item[keyFiter[0]] === defaultFilter[keyFiter[0]] ? 'is-active' : ''">{{item[keyFiter[1]]}}</span>
  </div>
</div>
</template>

<script>
import lmSelect from './lm-select.vue'

export default{
  props: {
    filterData: {
      type: Array,
      require: true
    },
    options: {
      type: Array,
      require: true
    },
    defaultSelect: {
      type: Object,
      require: true
    },
    keyFiter: {
      type: Array,
      require: true
    },
    keyword: {
      type: Array,
      require: true
    },
    defaultFilter: {
      type: Object,
      require: true
    },
    selectShow: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleChange (res) {
      this.$emit('handleChange', res)
    },
    changeFilterData (e) {
      this.defaultFilter[this.keyFiter[0]] = e[this.keyFiter[0]]
      this.$emit('changeFilterData', e)
    }
  },
  components: {
    'lm-select': lmSelect
  }
}
</script>

<style lang="less">
@tr-color:#27cc9f;
.tab-ranking{
  width:100%;
  border-bottom: 2px solid @tr-color;
  box-sizing: border-box;
  height:40px;
  .tr-title{
  display:inline-block;
    span{
      display: inline-block;
      line-height: 38px;
      height:38px;
      font-size:18px;
      color:@tr-color;
      font-weight: 600;
    }
  }
.tr-select{
  display: inline-block;
  margin-left: 20px;
}
.tr-filter{
  display: inline-block;
  float:right;
  line-height: 38px;
  height:38px;
  span{
    font-size:14px;
    color:#cbcbcb;
    margin-left: 24px;
    cursor: pointer;
  }
  .is-active{
    color:@tr-color;
  }
}
}
</style>
