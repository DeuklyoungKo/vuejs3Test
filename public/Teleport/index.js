const app = Vue.createApp({});

app.component('modal-button', {
  template: `
    <button @click="modalOpen = true">
        Open full screen modal!
    </button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal" @click.stop.prevent="modalOpen = false">
        <div @click.stop="modalOpen = true">
          I'm a modal!
          <button @click.stop="modalOpen = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  `,
  data() {
    return {
      modalOpen: false
    }
  }
})


const vm = app.mount('#app') 