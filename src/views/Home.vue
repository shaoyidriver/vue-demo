<template>
    <div>
      <h3>home</h3>
      <hr/>
        <router-link to="news">news</router-link>
        <router-link to="messages">messages</router-link>
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
