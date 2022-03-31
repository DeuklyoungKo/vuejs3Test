// const myMixin = {
//     methods: {
//       foo() {
//         console.log('foo')
//       },
//       conflicting() {
//         console.log('from mixin')
//       }
//     }
//   }
import {myMixin} from './myMixin.js' 
import {baseData} from './importEx.js' 

  const app = Vue.createApp({
    mixins: [myMixin],
    data(){
        return{
            message:"default"
        }
    },
    methods: {
      bar() {
        console.log('bar')
      },
      conflicting() {
        console.log('from self')
      }
    },
    mounted(){
        this.foo()
        this.message = baseData.a
    }
  })
  
  const vm = app.mount('#app') // => "hello from mixin!"

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
