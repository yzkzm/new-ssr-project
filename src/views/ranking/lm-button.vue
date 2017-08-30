<template>
  <button type="button" :class="[
  type ? 'lm-button--' + type : '',
  size ? 'lm-button--' + size : '',
  {'is-bold': bold,}]" class="lm-button" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default{
    props: {
      type: {
        type: String,
        require: true,
        default: 'default'
      },
      size: {
        type: String
      },
      bold: Boolean
    },
    methods: {
      handleClick () {
        console.log('sss')
      }
    }
}
</script>

<style lang="less" rel="stylesheet/less">
  .lm-button{
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    color:#27cc9f;
    border: 1px solid #27cc9f;
    text-align: center;
    box-sizing: border-box;
    outline:none;
    margin: 0;
    padding: 6px 20px;
    font-size:14px;
    border-radius: 4px;
    span{
      display: inline-block;
      line-height: 14px;
    }
  }
  .lm-button:hover,.lm-button:focus{
    background:#27cc9f;
    color:#fff;
  }
  .lm-button:active {
    background:#27cc9f;
    color:#fff;
  }
  .lm-button--primary{
    background:#27cc9f;
    color:#fff;
    border-color: #27cc9f;
  }
  .is-bold span{
    font-weight: 600;
  }
  .lm-button--large{
    padding:16px 29px;
    font-size:16px;
    span{
      line-height:16px;
    }
  }
</style>

