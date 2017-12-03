<template type="text/html" id="newsCom">
  <div>
      <ul class="mui-table-view">
        <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
            <router-link :to="'/news/newsDetail/'+item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <p class="news-title">{{item.zhaiyao}}</p>
                    <p class='mui-ellipsis'>
                        <span>{{item.add_time | timeFormat('YYYY-MM-DD HH:mm')}}</span>
                        <span>点击数 : {{item.click}}</span>
                    </p>
                </div>
            </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
    import requestUrl from '../../common/common.js';

    export default {
        template: "#newsCom",
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                const url = `${requestUrl.requestUrl}api/getnewslist`; // 模板字符创

                this.$http.get(url).then(response => {
                    // console.log(response.body);
                    this.newsList = response.body.message;
                });
            }
        }
    }
</script>

<style scoped>
    .mui-table-view-cell.mui-media {
        height: 80px;
    }

    .mui-table-view .mui-media-object {
        width: 60px;
        max-width: 60px;
        height: 60px;
    }

    .news-title {
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .mui-ellipsis {
        color: darksalmon;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
</style>

