<template>
  <h3 class="login">{{msg}}</h3>
</template>

<script>
  export default {
      name: 'login',
      data () {
          return {
              msg: "登录页",
          }
      }
  }
</script>

<style>
  .login {
    color: red;
  }
</style>
