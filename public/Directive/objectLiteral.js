const app = Vue.createApp({})

app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})

app.mount('#dynamicexample')