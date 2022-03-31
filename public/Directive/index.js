{/* <template>
  <div>{{myOption}}</div>
</template> */}

const app = Vue.createApp({
  myOption: 'hello!',
  mounted(){
    console.log("mounted")
    console.log(this.$options)
  },
  template:`
  <div id="simplest-directive-example" class="demo">
    <input v-focus />
  </div>
  `,
  style:`
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
  `
})


app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})


const vm = app.mount('#app') 