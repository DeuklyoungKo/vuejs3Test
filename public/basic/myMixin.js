export const myMixin = {
    methods: {
      foo() {
        console.log('foo')
      },
      conflicting() {
        console.log('from mixin')
      }
    }
  }