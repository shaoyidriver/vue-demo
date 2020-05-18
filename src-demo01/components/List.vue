<template>
  <ul>
    <Item v-for="(item,index) in components" :component="item" :deleteComment="deleteComment" :index="index" :key="index"/>
  </ul>
</template>

<script>
  import Item from "./Item";

  export default {
    name: 'List',
    components: {Item},
    props: ['components','delete'],
    data() {
      return {}
    },
    methods: {
        deleteComment (key) {
            this.components.splice(key,1);
        }
    }
  }
</script>

<style>

</style>
