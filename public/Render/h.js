const app = Vue.createApp({})

/** Recursively get text from children nodes */
function getChildrenTextContent(children) {
  return children
    .map(node => {
      return typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : ''
    })
    .join('')
}

app.component('anchored-heading', {
  render() {
    // create kebab-case id from the text contents of the children
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, '-') // replace non-word characters with dash
      .replace(/(^-|-$)/g, '') // remove leading and trailing dashes

    return [Vue.h('h' + this.level, [
      Vue.h(
        'a',
        {
          name: headingId,
          href: '#' + headingId
        },
        this.$slots.default()
      )
    ]),
    Vue.h('input', {
      onKeyUp: event => {
        // Abort if the element emitting the event is not
        // the element the event is bound to
        if (event.target !== event.currentTarget) return
        // Abort if the key that went up is not the enter
        // key (13) and the shift key was not held down
        // at the same time
        if (!event.shiftKey || event.keyCode !== 13) return
        // Stop event propagation
        event.stopPropagation()
        // Prevent the default keyup handler for this element
        event.preventDefault()
        // ...
      }
    })
  ]
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
const vm = app.mount('#app') 