<template>
	<div class="articles">
		<ArticleTile v-for="article in articles" :key="article.id" v-bind="article"></ArticleTile>
	</div>
</template>

<script>
// import { ARTICLE_SHAPE } from "../../shared/utils/article";

import ArticleTile from "../ArticleTile";

export default {
	components: {
		ArticleTile
	},
	props: {
		articles: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.articles {
	padding: 50px;
	margin: auto;
	width: 70%;
}

.article {
	margin-bottom: 60px;
}
</style>
