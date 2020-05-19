<template>
    <div>
      <h3>home</h3>
      <hr/>
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/messages">messages</router-link>
      <br/>
<!--      <keep-alive>-->
        <router-view></router-view>
<!--      </keep-alive>-->

    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {}
        }
    }
</script>

<style>

</style>
