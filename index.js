import MLabel from './packages/MLabel/index.js'
import MInput from './packages/MInput/index.js'
import MTabs from './packages/MTabs/index.js'
import MTabPane from './packages/MTabPane/index.js'

const components = [MLabel, MInput, MTabs, MTabPane]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
