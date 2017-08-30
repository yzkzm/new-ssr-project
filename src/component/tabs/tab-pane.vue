<template>
  <div class="el-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabPane',
    componentName: 'ElTabPane',
    props: {
      label: String,
      labelContent: Function,
      name: String
    },
    data () {
      return {
        index: null
      }
    },
    computed: {
      active() {
        return this.$parent.currentName === (this.name || this.index)
      }
    },
    mounted () {
      this.$parent.addPanes(this)
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.$parent.removePanes(this)
    },
    watch: {
      label() {
        this.$parent.$forceUpdate()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
