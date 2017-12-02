<template>
    <div>
        <!-- 顶部 -->
        <mt-header fixed title="vue_project">vue project</mt-header>

        <!-- 中间部分 -->
        <router-view></router-view>

        <!-- 底部 -->
        <mt-tabbar>
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
</style>


