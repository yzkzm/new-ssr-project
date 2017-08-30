<template>
    <div class="tab_active-bar" :style="styleBar"><span></span></div>
</template>

<script>
    export default {
      name: 'TabBar',
      props: {
        tabs: Array
      },
      computed: {
        barStyle: {
          cache: false,
          get() {
            if (!this.$parent.$refs.tabs) return {}
            let style = {}
            let offset = 0
            let tabWidth = 0
            this.tabs.every((tab, index) => {
              let $el = this.$parent.$refs.tabs[index]
              if (!$el) { return false }
              if (!tab.active) {
                offset += $el.clientWidth
                return true
              } else {
                tabWidth = $el.clientWidth
                return false
              }
            })
            const transform = `translateX(${offset}px)`
            style.width = tabWidth + 'px'
            style.transform = transform
            style.msTransform = transform
            style.webkitTransform = transform
            return style
          }
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
.tab_active{
  position: relative;
  span{
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2px;
    border:3px solid transparent;
    border-bottom-color:#27cc9f;
  }
}
</style>
