<template type="text/html" id="homeCom">
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item, index) in swipers" v-bind:key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/news/newsList">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">News</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">Location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-gear"></span>
            <div class="mui-media-body">Setting</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-info"></span>
            <div class="mui-media-body">About</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-more"></span>
            <div class="mui-media-body">More</div>
          </a>
        </li>
    </ul> 
  </div>
</template>

<script>
  import requestUrl from '../../common/common.js';

  // 规定写法
  export default {
    template: "#homeCom",
    // data: function() {}
    // es6中, 对象内的方法可以简写为: 
    data() {
      return {
        swipers: [] // 返回一个存储轮播图图片的数组
      }
    },
    // 当组件被加载时, 自动触发
    created() {
      this.getSwipers();
    },
    methods: {
      getSwipers() {
        const url = `${requestUrl.requestUrl}api/getlunbo`;

        this.$http.get(url).then(response => {
          this.swipers = response.body.message;
        })
      }
    }
  }
</script>

<style scoped>
  .mint-swipe {
    width: 100%;
    height: 270px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .mui-icon::before {
    content: "";
  }

  .mui-icon {
    width: 50px;
    height: 50px;
  }

  .mui-icon-home {
    background: url("../../statics/images/menu10.png") center center / 100% 100%;
  }

  .mui-icon-email {
    background: url("../../statics/images/menu4.png") center center / 100% 100%;
  }

  .mui-icon-chatbubble {
    background: url("../../statics/images/menu5.png") center center / 100% 100%;
  }

  .mui-icon-location {
    background: url("../../statics/images/menu3.png") center center / 100% 100%;
  }

  .mui-icon-search {
    background: url("../../statics/images/menu6.png") center center / 100% 100%;
  }

  .mui-icon-phone {
    background: url("../../statics/images/menu9.png") center center / 100% 100%;
  }

  .mui-icon-gear {
    background: url("../../statics/images/menu3.png") center center / 100% 100%;
  }

  .mui-icon-info {
    background: url("../../statics/images/menu5.png") center center / 100% 100%;
  }

  .mui-icon-more {
    background: url("../../statics/images/menu9.png") center center / 100% 100%;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0 none;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0 none;
  }
</style>

