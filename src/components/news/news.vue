<template type="text/html" id="newsCom">
  <div>
      新闻页
  </div>
</template>

<script>
    export default {
        template: "#newsCom",
        data() {
            return {
                newsList: []
            }
        },
        methdos: {
            getNewsList() {
                const url = 'http://vue.studyit.io/api/getnewslist';

                this.$http.get(url).then(response => {
                    this.newsList = response.body.message;
                });
            }
        }
    }
</script>
