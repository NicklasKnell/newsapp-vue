<template>
  <div class="article">
    <router-link class="title" :to="articleLink">{{title}}</router-link>
    <p>{{content}}</p>
    <router-link class="button" :to="articleLink">More</router-link>
    <div class="metadata">
      <span v-if="author">{{author}}</span>
      <span v-if="author && releaseDate" class="separator"></span>
      <span v-if="releaseDate">{{releaseDate}}</span>
    </div>
  </div>
</template>

<script>
import { ARTICLE_SHAPE } from "../../shared/utils/article";
import ARTICLE_DETAIL_ROUTE from "../../shared/utils/routes";

export default {
  props: { ...ARTICLE_SHAPE },
  computed: {
    articleLink: function() {
      return `${ARTICLE_DETAIL_ROUTE}/${this.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  background-color: #ffffff;
  color: #111111;
  padding: 20px 30px;
  border: solid 1px #d4d800;
}

.metadata {
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
}

.title {
  font-size: 30px;
  &:hover {
    color: #090e28;
  }
}

.button {
  width: 200px;
  height: 30px;
  margin-top: 40px;
  font-size: 16px;
  color: #111111;
  background-color: #d4d800;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: solid 1px #111111;
    background-color: white;
  }
}

.separator {
  width: 20px;
  text-align: center;
}
</style>

