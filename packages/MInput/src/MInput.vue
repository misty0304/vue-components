<template>
  <div class="fb fb-main-start fb-cross-center bg-FFFFFF common-input">
    <input
      type="text"
      class="width-full lh-48 font-30 bg-none font-34 c-1f1f1f"
      ref="inputCtx"
      v-bind="$props"
      :style="{ textAlign: textAlign }"
      :maxlength="maxlength ? maxlength : ''"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="handleFocus"
      @change="handleChange"
      @click="handleClick"
      @blur="handleBlur"
    />
    <span v-if="showClear" class="icon-box m-0-32" @click="handleClear">
      <i class="iconfont icon-round-clear font-32"> </i>
    </span>
    <span v-if="isError" class="icon-box m-0-32">
      <i class="iconfont icon-warning font-32 c-F25643"> </i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MInput',
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    clear: {
      type: Boolean,
      default: true
    },
    // 是否报错,true:是,false:否
    isError: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showClear() {
      return this.clear && this.value && !this.isError
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleFocus() {
      this.onResize()
    },
    handleBlur() {
      this.onResize(1)
    },
    handleClick(e) {
      this.$emit('click', e)
    },
    handleChange(e) {
      this.$emit('change')
    },
    handleClear(e) {
      this.$emit('input', '')
      this.$refs.inputCtx.focus()
      this.onResize()
    },
    onResize(value) {
      if (/iphone/i.test(window.navigator.userAgent)) {
        setTimeout(() => {
          this.$emit('watchResize', value)
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.common-input {
  .icon-box {
    text-align: right;
    color: #bbbbbb;
  }
  .bg-none {
    background: none;
  }
  input::-webkit-input-placeholder {
    color: rgba(#1f1f1f, 0.4);
  }
}
</style>
