<template>
  <li>
    <span>{{component.userName}}</span>
    <span>{{component.content}}</span>
    <button @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            component: Object,
            deleteComment: Function,
            index: Number
        },
        data () {
            return {}
        },
        methods: {
            deleteItem () {
                if (window.confirm(`确认删除${this.component.userName}的评论？`)) {
                    this.deleteComment(this.index);
                }
            }
        }
    }
</script>

<style>

</style>
