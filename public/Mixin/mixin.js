const app = Vue.createApp({
  myOption: 'hello!',
  mounted(){
    console.log("mounted")
    console.log(this.$options)
  },
  template:`
    <div>
      <div>root App</div>
      <test-component></test-component>
    </div>
  `
})

// `myOption` 사용자 정의 옵션을 위한 핸들러 주입
app.mixin({
  created() {
    const myOption = this.$options.myOption
    console.log("this.$options in mixin")
    console.log(this.$options)
    if (myOption) {
      console.log("myOption==================================")
      console.log(myOption)
    }
  }
})

// `myOption`을 자식 컴포넌트에도 삽입
app.component('test-component', {
  myOption: 'hello from component!',
  data(){
    return{
      compoentTitle : "sub sub title"
    }
  },
  mounted(){
    console.log("component mounted")
    console.log(this.$options)
  },

  template:`
    <div><h1>{{compoentTitle}}</h1></div>
  `
})


const vm = app.mount('#app') 