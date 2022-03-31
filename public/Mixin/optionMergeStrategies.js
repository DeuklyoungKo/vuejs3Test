const app = Vue.createApp({
  custom: 'hello!',
  custom2: 'hello2!',
  mounted(){
    console.log("this.$options")
    console.log(this.$options)
  }
})

app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
  console.log("custom")
  console.log(fromVal, toVal)
  // => "goodbye!", undefined
  // => "hello", "goodbye!"
  return toVal || fromVal
}

app.config.optionMergeStrategies.custom2 = (toVal, fromVal) => {
  console.log("custom2")
  console.log(fromVal, toVal)
  // => "goodbye!", undefined
  // => "hello", "goodbye!"
  return fromVal || toVal
}


app.mixin({
  custom: 'goodbye!',
  created() {
    console.log("from mixin") // => "hello!"    
    console.log(this.$options.custom) // => "hello!"
  }
})


const vm = app.mount('#app') 