<template>
  <div class="lm-select" v-clickoutside="handleClose">
    <div class="lm-select-input " @click="handleShow">
      <i class="lm-input__icon iconfont" :class="isReverse"></i>
      <input type="text" placeholder="请选择" v-model="select" readonly="readonly" class="lm-input_inner">
    </div>
    <div class="lm-select-dropDown" v-show="visible">
      <ul>
           <li v-for="(item, key, index) in options" :class="item[keyword[1]] === select ? 'active' : ''" key="item[keyword[0]]" @click.stop="handleChange(item)">
             <span>{{item[keyword[1]]}}</span>
           </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import clickoutside from '../util/clickoutside.js'

  export default{
    props: {
      options: {
        type: Array,
        require: true
      },
      keyword: {
        type: Array,
        require: true
      },
      defaultSelect: {
        type: Object,
        require: true
      }
    },
  data () {
    return {
      visible: false,
      isReverse: 'icon-top',
      select:''
    }
  },
  created () {
    console.log(this.defaultSelect[this.keyword[0]])
    this.filterLabel(this.defaultSelect)
  },
  methods: {
    filterLabel (res) {
      if (res[this.keyword[0]]) {
        console.log('1')
        var f = this.options.filter((result) => {
         return res[this.keyword[0]] === result[this.keyword[0]]
        })
        this.select = f[0][this.keyword[1]]
      } else if (res[this.keyword[1]]) {
        var f = this.options.filter((result) => {
          return res[this.keyword[1]] === result[this.keyword[1]]
        })
        this.select = f[0][this.keyword[1]]
      }
      return false
    },
    handleClose () {
      this.visible = false
      this.isReverse = 'icon-top'
      console.log('ss')
    },
    handleShow () {
      if (this.visible) {
        this.handleClose()
        return false
      }
      this.visible = true
      this.isReverse = 'icon-bottom'
    },
    handleChange (item) {
      if (this.select !== item[this.keyword[1]]) {
        this.select = item[this.keyword[1]]
        this.$emit('change', item)
      }
      this.handleClose()
      return false
    }
  },
    directives: {
      clickoutside
    }
}
</script>

<style lang="less">
.lm-select{
  width:90px;
  display: inline-block;
  position: relative;
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #27cc9f;
}
.lm-select-input{
    display: block;
  }
  .lm-input_inner{
    cursor: pointer;
    padding-right: 18px;
  }
  .lm-input__icon{
    color: #fff;
    font-size: 12px;
    transition: transform 1s;
    transform: translateY(-50%) rotate(180deg);
    line-height: 16px;
    top: 50%;
    cursor: pointer;
    height:20px;
  }
}
  .lm-select-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
  .lm-select-dropDown{
    box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 0 6px rgba(0,0,0,0.04);
    overflow-y: auto;
    margin-top: -1px;
    position: absolute;
    width:100%;
    max-height:100px;
    border: 1px solid #27cc9f;
    box-sizing: border-box;
  background:#fff;
    .active{
      background:#27cc9f;
      color:#fff;
    }
    li{
      width:100%;
      font-size:12px;
      padding:4px 6px;
      color:#999999;
      box-sizing: border-box;
    }
    li:hover{
      cursor: pointer;
      background: #eeeeee;
      color: #212121;
    }
    .active:hover{
      background: #27cc9f;
      color:#fff;
    }
  }
  .lm-input_inner{
    background-color: #fff;
    background-image: none;
    border: 1px solid #27cc9f;
    box-sizing: border-box;
    color: #27cc9f;
    display: inline-block;
    font-size: 12px;
    height: 20px;
    line-height: 1;
    outline: none;
    padding: 3px 6px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .lm-input__icon{
    position: absolute;
    width: 18px;
    height: 100%;
    right: 0;
    background: #27cc9f;
    /*top: 0;*/
    text-align: center;
    /*color: #bfcbd9;*/
   /* transition: all .3s;*/
  }
  .lm-input_inner::placeholder{
    color:#27cc9f
  }
  .lm-input__icon::after{
    content: "";
    height: 100%;
    /* width: 0; */
    display: inline-block;
    vertical-align: middle;
  }
</style>


