<template>
  <div>
    <div>
      <router-link to="/about">about</router-link>
      <router-link to="/home">home</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        }
    }
</script>

<style>

</style>
