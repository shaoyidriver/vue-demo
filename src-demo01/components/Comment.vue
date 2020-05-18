<template>
  <div>
    <span>姓名：</span>
    <input v-model="userName" />
    <span>评论</span>
    <textarea v-model="content"></textarea>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
    export default {
        name: 'Comment',
        props: {
            addComment: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                userName: '',
                content: ''
            }
        },
        methods: {
            submit () {
                const name = this.userName.trim();
                const content = this.content.trim();
                if (!name || !content) {
                    console.log("用户名或评论为空");
                    return;
                }
                const comment = {userName:name,content};
                this.addComment(comment);
                this.userName = '';
                this.content = '';
            }
        }
    }
</script>

<style>

</style>
