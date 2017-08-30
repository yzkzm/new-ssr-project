<template>
</template>

<script>
  import TabNav from './tab-nav.vue'
    export default {
      name: 'Tabs',
      components: {
        TabNav
      },
      props: {
        type: String,
        activeName: String,
        addable: Boolean,
        value: {}
      },
      data() {
        return {
          currentName: this.value || this.activeName,
          panes: []
        }
      },
      watch: {
        activeName(value) {
          this.setCurrentName(value)
        },
        value(value) {
          this.setCurrentName(value)
        },
        currentName(value) {
          if (this.$refs.nav) {
            this.$nextTick(_ => {
              this.$refs.nav.scrollToActiveTab()
            });
          }
        }
      },
      methods: {
        handleTabClick(tab, tabName, event) {
          if (tab.disabled) return
          this.setCurrentName(tabName)
          this.$emit('tab-click', tab, event)
        },
        setCurrentName(value) {
          this.currentName = value;
          this.$emit('input', value)
        },
        addPanes(item) {
          const index = this.$slots.default.indexOf(item.$vnode)
          this.panes.splice(index, 0, item)
        },
        removePanes(item) {
          const panes = this.panes
          const index = panes.indexOf(item)
          if (index > -1) {
            panes.splice(index, 1)
          }
        }
      },
      render(h) {
        let {
          type,
          handleTabClick,
          handleTabRemove,
          handleTabAdd,
          currentName,
          panes
        } = this
        const navData = {
          props: {
            currentName,
            onTabClick: handleTabClick,
            onTabRemove: handleTabRemove,
            type,
            panes
          },
          ref: 'nav'
        }
        return (
          <div class={{
            'el-tabs': true,
            'el-tabs--right': type === 'right'
          }}>
            <div class="el-tabs__header">
              {newButton}
              <tab-nav { ...navData }></tab-nav>
            </div>
            <div class="el-tabs__content">
              {this.$slots.default}
            </div>
          </div>
        )
      },
      created() {
        if (!this.currentName) {
          this.setCurrentName('0')
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>
