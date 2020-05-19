<template>
    <div>
      <h3>this is messages page!</h3><button @click="$router.back()">返回</button>
      <ul>
        <li v-for="detail in details" :key="detail.id">
          <router-link :to="`/home/messages/detail/${detail.id}`">{{detail.name}}</router-link>
          <button @click="push(detail.id)">push</button>
          <button @click="replace(detail.id)">replace</button>
        </li>
      </ul>
      <hr/>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Messages',
        data() {
            return {
                details: [
                    {
                        id: 1,
                        name: 'zhangsan'
                    },{
                        id: 2,
                        name: 'lisi'
                    },{
                        id: 3,
                        name: 'wangwu'
                    },
                ]
            }
        },
        methods: {
            push(id) {
                this.$router.push(`/home/messages/detail/${id}`);
            },
            replace(id) {
                this.$router.replace(`/home/messages/detail/${id}`);
            }
        }
    }
</script>

<style>

</style>
