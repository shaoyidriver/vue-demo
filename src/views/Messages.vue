<template>
    <div>
      <h3>this is messages page!</h3>
      <ul>
        <li v-for="detail in details" :key="detail.id">
          <router-link :to="`/home/messages/detail/${detail.id}`">{{detail.name}}</router-link>
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
        }
    }
</script>

<style>

</style>
