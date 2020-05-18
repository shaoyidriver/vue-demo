<template>
    <div>
      <h5>this is detail page!</h5>
      {{detail.introduce}}
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
                details: [
                    {
                        id: 1,
                        name: 'zhangsan',
                        introduce: "张三"
                    },{
                        id: 2,
                        name: 'lisi',
                        introduce: "李四"
                    },{
                        id: 3,
                        name: 'wangwu',
                        introduce: "王五"
                    },
                ],
                detail: {}
            }
        },
        mounted() {
            this.init(this.$route);
        },
        watch: {
            $route: function (value) {
                this.init(value)
            }
        },
        methods: {
            init(route) {
                this.detail = this.details.find(det => route.params.id == det.id);
            }
        }
    }
</script>

<style>

</style>
