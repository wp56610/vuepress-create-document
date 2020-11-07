<DemoButton @click="btnClick">{{btn}}</DemoButton>


```js {mixin:true}

{
  data() {
    return {
      btn: 'btn-text'
    }
  },
  methods:{
    btnClick(){
      alert('click me')
    }
  }
}
```
```html
<template>
  <DemoButton @click="btnClick">{{btn}}</DemoButton>
</template>
<script>
export default {
  data() {
    return {
      btn: 'btn-text'
    }
  },
  methods:{
    btnClick(){
      alert('click me')
    }
  }
}
</script>

```