<template type="text/html" id="homeCom">
    <div>
        <!-- 顶部 -->
        <mt-header fixed title="vue_project">vue project</mt-header>
        <div @click="goBack()" class="goBack" v-show="show">返回</div>

        <!-- 中间部分 -->
        <router-view></router-view>

        <!-- 底部 -->
        <mt-tabbar :fixed='true' :class="!show ? '' : 'hidden-me'">
            <mt-tab-item>
                <router-link to='/home'>
                    <img src="//st.360buyimg.com/m/images/index/a-home.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/category">
                    <img src="//st.360buyimg.com/m/images/index/n-catergry.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <img src="//st.360buyimg.com/m/images/index/n-cart.png">
            </mt-tab-item>
            <mt-tab-item>
                <img src="//st.360buyimg.com/m/images/index/n-me.png">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<!-- scoped 的作用是 使得当前样式只作用于当前组件的节点 -->
<style scoped>

    .mint-header.is-fixed {
        background-color: #cee;
    }

    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: #cee;
    }

    .mint-tab-item-label img {
        width: 52px;
        height: 40px;
    }

    .goBack {
        position: fixed;
        left: 10px;
        top: 10px;
        z-index: 2;
        color: #fff;
        font-size: 14px;
    }

    .hidden-me {
        display: none;
    }
</style>

<script>

    // 当为首页时, 显示底部, 不显示返回按钮; 其余时候, 显示返回按钮, 不显示底部
    export default {
        template: 'homeCom',
        // 监视, 属性为被监视的对象或者属性, 当被监视的对象发生变化时, 触发函数
        watch: {
            "$route": function(newPath, oldPath) {
                // console.log(this.$route.path); // 获取到url后的路径 和 newPath.path是一样的
                this.showOrHidden(newPath.path);
            }
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1); // 相当于window.history.go(-1)
            },
            showOrHidden(newPath) {
                if(newPath == '/home') {
                    this.show = false;
                }else {
                    this.show = true;
                }
            }
        },
        created() {
            // 当只是在当前重新刷新时, 就不会触发watch, 因为没有改变, 所以使用created, 当加载组件时就触发该方法
            this.showOrHidden(this.$route.path);
        }
    }
</script>


