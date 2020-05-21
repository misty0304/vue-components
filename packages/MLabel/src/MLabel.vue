<template>
  <div>
    <div
      class="fb fb-main-start bg-FFFFFF common-label pt-30"
      :class="{ 'pl-32': !required }"
      v-if="type === 'inline'"
    >
      <div v-if="required" class="ml-8 mr-4 w-20 h-52">
        <div
          class="common-label_required c-F25643 w-20 font-20 text-center h-52 lh-52"
          >*</div
        >
      </div>
      <div
        class="pb-30 fb fb-main-start fb-cross-center item-flex-1"
        :class="{ 'm-bb-error': isError && !!borderLine, 'm-bb': borderLine === 'bottom' }"
      >
        <div
          class="common-label_label mr-16 font-34 w-140"
          :class="{ 'c-F25643': isError }"
          >{{ label }}</div
        >
        <div class="font-34 item-flex-1">
          <slot></slot>
        </div>
      </div>
    </div>
    <div
      class="bg-FFFFFF common-label pl-32 pt-20"
      :class="{ 'pl-32': !required }"
      v-if="type === 'moreline'"
    >
      <div class="fb fb-main-start fb-cross-center h-52 pr-32">
        <div
          class="common-label_label font-26"
          :class="{ 'c-F25643': isError }"
          >{{ label }}</div
        >
        <div
          class="common-label_required c-F25643 w-20 font-20 text-center ml-4"
          v-if="required"
          >*</div
        >
      </div>
      <div class="h-68" :class="{ 'm-bb': borderLine === 'bottom', 'm-bb-error': isError && !!borderLine }">
        <slot></slot>
      </div>
    </div>
    <div class="c-F25643 bg-FFFFFF pl-32 pt-4" v-show="isError">{{
      errorMsg
    }}</div>
  </div>
</template>

<script>
export default {
  name: 'MLabel',
  components: {},
  props: {
    // 是否是必填项,true:是,false:否
    required: {
      type: Boolean,
      default: false
    },
    // 标题
    label: {
      type: String,
      default: ''
    },
    borderLine: {
      type: String,
      default: ''
    },
    // 是否报错,true:是,false:否
    isError: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'inline'
    },
    errorMsg: {
      type: String,
      default: ''
    }
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
  methods: {}
}
</script>

<style lang="scss" scoped></style>
