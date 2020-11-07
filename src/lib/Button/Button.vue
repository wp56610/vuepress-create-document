<template>
  <button @click="btnClick">
    <!-- 这里是模认插槽啦 -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'DemoButton',
  props:{
    // `medium` / `small` / `mini`
    size:{
      type:String,
      default:'medium'
    },
    // primary / success / warning / danger / info / text
    type:{
      type:String,
      defaut:'primary'
    }
  },
  methods:{
    btnClick(){
      // 这是点击事件
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
button{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>