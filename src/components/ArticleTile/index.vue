<template>
  <div :class="theme" class="article">
    <router-link :class="theme" class="title" :to="articleLink">{{title}}</router-link>
    <p>{{content}}</p>
    <router-link :class="theme" class="button" :to="articleLink">More</router-link>
    <ArticleMetadata v-bind="{releaseDate, author}"/>
  </div>
</template>

<script>
import { ARTICLE_SHAPE } from "../../shared/utils/article";

import ArticleMetadata from "../ArticleMetadata";

export default {
  props: { ...ARTICLE_SHAPE },
  components: {
    ArticleMetadata
  },
  computed: {
    articleLink() {
      return `article/${this.id}`;
    },
    theme() {
      return this.$store.state.theme;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/global";
@import "../../shared/styles/article";

.title {
  font-size: 45px;

  &.dark {
    &:hover {
      color: $DARK_ARTICLE_TITLE_HOVER;
    }
  }

  &.light {
    &:hover {
      color: $LIGHT_ARTICLE_TITLE_HOVER;
    }
  }
}

.button {
  display: inline-flex;
  width: 250px;
  margin-top: 40px;
  font-size: 25px;
  align-items: center;
  justify-content: center;

  color: black;
  background-color: white;

  border: solid 1px black;

  &.dark {
    background-color: $DARK_ARTICLE_BUTTON_BG;
    color: $DARK_ARTICLE_BUTTON_COLOR;
    border-color: $DARK_ARTICLE_BUTTON_BORDER;
    &:hover {
      background-color: $DARK_ARTICLE_BUTTON_BG_HOVER;
      color: $DARK_ARTICLE_BUTTON_COLOR_HOVER;
      border-color: $DARK_ARTICLE_BUTTON_BORDER_HOVER;
    }
  }

  &.light {
    background-color: $LIGHT_ARTICLE_BUTTON_BG;
    color: $LIGHT_ARTICLE_BUTTON_COLOR;
    border-color: $LIGHT_ARTICLE_BUTTON_BORDER;
    &:hover {
      background-color: $LIGHT_ARTICLE_BUTTON_BG_HOVER;
      color: $LIGHT_ARTICLE_BUTTON_COLOR_HOVER;
      border-color: $LIGHT_ARTICLE_BUTTON_BORDER_HOVER;
    }
  }
}
</style>

