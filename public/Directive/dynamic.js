const app = Vue.createApp({})

app.directive('pin', {
  mounted(el, binding) {
    el.style.position = 'fixed'
    // bindig.value는 디렉티브에게 전달한 값입니다.. 이 경우에는 200입니다.
    el.style.top = binding.value + 'px'
  }
})

app.mount('#dynamic-arguments-example')


const app2 = Vue.createApp({
  data() {
    return {
      direction: 'right',
      pinPadding: 200      
    }
  }
});

// app2.directive('pin2', {
//   mounted(el, binding) {

//     console.log("app2.directive");
//     console.log(el);
//     console.log(binding);

//     el.style.position = 'fixed'
//     const s = binding.arg || 'top'
//     el.style[s] = binding.value + 'px'
//   },
//   updated(el, binding) {
//     const s = binding.arg || 'top'
//     el.style[s] = binding.value + 'px'
//   }  
// })


app2.directive('pin2', (el, binding) => {
  el.style.position = 'fixed'
  const s = binding.arg || 'top'
  el.style[s] = binding.value + 'px'
})



app2.mount('#dynamicexample')