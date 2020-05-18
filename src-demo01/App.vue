<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
    <login/>
    <Comment :addComment="addComment"/>
    <List :components="components"/>
  </div>
</template>

<script>
  import Login from './page/login'
  import Comment from "./components/Comment";
  import List from "./components/List";

  export default {
      name: 'App',
      components: {
        Login,Comment,List
      },
      data () {
          return {
              components: [
                  {
                      userName: '张三',
                      content: '测试用例1。'
                  },{
                      userName: '李四',
                      content: '测试用例2。'
                  },{
                      userName: '王五',
                      content: '测试用例3。'
                  },{
                      userName: '赵六',
                      content: '测试用例4。'
                  },
              ]
          }
      },
      methods: {
          addComment (comment) {
              this.components.unshift(comment);
          },
          deleteComment (key) {
              this.components.splice(key,1);
          }
      }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
