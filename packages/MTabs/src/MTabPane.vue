<template>
  <div class="m-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MTabPane',
  components: {},
  props: {
    label: String,
    name: String
  },
  data() {
    return {}
  },
  computed: {
    active() {
      return this.$parent.currentName === (this.name || this.index)
    }
  },
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
  methods: {}
}
</script>
