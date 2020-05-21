<script>
import MTabsNav from './MTabsNav'

export default {
  name: 'MTabs',
  components: { MTabsNav },
  props: {
    value: {}
  },
  data() {
    return {
      currentName: this.value,
      panes: []
    }
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.methodCalcPaneInstances()
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    handleTabClick(tab, tabName, event) {
      this.currentName = tabName
      this.$emit('input', tabName)
      this.$emit('tab-click', tab, event)
    },
    // 初始化panes
    methodCalcPaneInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(
          vnode =>
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === 'MTabPane'
        )
        const panes = paneSlots.map(
          ({ componentInstance }) => componentInstance
        )
        const panesChanged = !(
          panes.length === this.panes.length &&
          panes.every((pane, index) => pane === this.panes[index])
        )
        if (isForceUpdate || panesChanged) {
          this.panes = panes
        }
      } else if (this.panes.length !== 0) {
        this.panes = []
      }
    }
  },
  render(h) {
    let { handleTabClick, currentName, panes } = this
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        panes: panes
      },
      ref: 'nav'
    }
    const header = (
      <div class={['m-tabs_header']}>
        <m-tabs-nav {...navData}></m-tabs-nav>
      </div>
    )
    const panels = <div class="m-tabs_content">{this.$slots.default}</div>
    return <div class="m-tabs_wrap">{[header, panels]}</div>
  }
}
</script>

<style lang="scss" scoped></style>
