<script>
export default {
  name: 'MTabsNav',
  components: {},
  props: {
    onTabClick: {
      type: Function,
      default: () => {}
    },
    panes: Array,
    currentName: String
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},
  render(h) {
    const { onTabClick, panes, currentName } = this
    let tabs = []
    const wp = 100 / panes.length
    panes.forEach(item => {
      tabs.push(
        <div
          class="m-tabs_nav fb fb-col fb-col-start-center"
          style={{ width: wp + '%' }}
          on-click={e => {
            onTabClick(item, item.name, e)
          }}
        >
          <div class="h-48 lh-48 w-p-100">{item.label}</div>
          <div class="m-tabs_nav-line" style={{'display': item.name === currentName ? 'block' : 'none'}}></div>
        </div>
      )
    })
    return <div class="fb fb-main-around m-tabs_nav-wrap bg-FFFFFF">{tabs}</div>
  }
}
</script>
<style lang="scss" scoped>
.m-tabs_nav {
  text-align: center;
  .m-tabs_nav-line {
    width: 28px;
    height: 6px;
    background: #0089ff;
  }
}
</style>
