<template>
  <div class="wrapper">
    <div class="article" :class="theme" v-if="article">
      <h1>{{article.title}}</h1>
      <p>{{article.content}}</p>
      <ArticleMetadata :author="article.author" :releaseDate="article.releaseDate"/>
    </div>
  </div>
</template>

<script>
import { fetchArticle } from "../../shared/utils/articleRequests.js";
import ArticleMetadata from "../../components/ArticleMetadata";

export default {
  data: () => {
    return {
      article: null
    };
  },
  components: {
    ArticleMetadata
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  mounted() {
    fetchArticle(this.$route.params.id)
      .then(data => {
        this.article = data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/global";
@import "../../shared/styles/article";
.wrapper {
  padding: 50px;
  margin: auto;
  width: 70%;
}
</style>
