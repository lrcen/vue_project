<template type="text/html" id="newsDCom">
  <div>
      <div class="header">
          <h4>{{newsDetail.title}}</h4>
          <p>{{newsDetail.add_time | timeFormat}}&nbsp;&nbsp;&nbsp;{{newsDetail.click}}次浏览&nbsp;&nbsp;&nbsp;分类 : 吹大气球</p>
      </div>
      <div class="content" v-html="newsDetail.content"></div>

        <!-- 初始化子组件 -->
        <!-- 把对应的id传递给子组件 -->
      <comment :id="this.$route.params.newsId"></comment>
  </div>
</template>

<script>
    import requestUrl from '../../common/common.js'

    // 导入子组件
    import comment from '../../subcomponents/comment.vue';

    export default {
        template: '#newsDCom',
        data() {
            return {
                newsDetail: {}
            }
        },
        created() {
            this.getNewsDetail();
        },
        methods: {
            getNewsDetail() {
                const url = `${requestUrl.requestUrl}api/getnew/` + this.$route.params.newsId;

                this.$http.get(url).then(response => {
                    console.log(response);

                    this.newsDetail = response.body.message[0];
                })
            }
        },
        // 注册子组件
        components: {
            comment
        }
    }
</script>

<style scoped>
    .header,.content {
        padding: 10px;
    }

    .header {
        border-bottom: 1px solid #666;
    }

    h4 {
        color: #333;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .header p {
        font-size: 12px;
    }

</style>
