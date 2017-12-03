<!-- 子组件 -->

<template type="text/html" id="commentCom">
  <div>
      <div class="commentHead">
          <h4>发表评论</h4>
          <textarea name="" id="" cols="30" rows="6" placeholder="请输入评论内容"></textarea>
          <mt-button size="large" type="primary">提交评论</mt-button>
      </div>
      <div class="commentBody">
          <h4>评论列表</h4>
          <ul>
              <li v-for="(item, index) in commentList" :key="index">
                  <p>{{item.content}}</p>
                  <p>
                      <span>{{item.user_name}}</span>
                      <span>{{item.add_time | timeFormat}}</span>
                  </p>
              </li>
          </ul>
          <mt-button size="large" plain type="danger" @click="loadMore()">加载更多</mt-button>
      </div>
  </div>
</template>

<script>
    import requestUrl from '../common/common.js';

    export default {
        template: 'commentCom',
        props: ['id'], // 指定所需要的数据, 父组件在使用子组件的时候传递对应的数据过来
        data() {
            return {
                commentList: [],
                pageNum: 1 // 默认获取第一页的数据
            }
        },
        created() {
            this.getCommentLists();
        },
        methods: {
            getCommentLists() {
                const url = requestUrl.requestUrl + 'api/getcomments/' + this.id + '?pageindex=' + this.pageNum;

                this.$http.get(url).then(response => {
                    if(this.pageNum === 1) { // 当为第一页时, 直接把数据保存到数组中
                        this.commentList = response.body.message;
                    }else {
                        this.commentList = this.commentList.concat(response.body.message); // 当大于等于2时, 后面查询到的数据拼接在原数组后面
                    }
                })
            },
            loadMore() {
                this.pageNum++; // 当点击加载更多时, 页数++

                this.getCommentLists(); // 调用获取数据的方法
            }
        }
    }
</script>

<style scoped>
    .commentHead, .commentBody {
        padding: 10px;
    }

    h4 {
        font-size: 16px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333;
        margin-bottom: 10px;
        font-weight: 500;
    }

    textarea {
        font-size: 12px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 20px;
    }

    li {
        padding: 10px 5px;
        border-bottom: 1px solid #666;
    }

    ul li p:first-of-type {
        color: #333;
        font-size: 14px;
    }

    ul li p:last-of-type {
        color: salmon;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
</style>

