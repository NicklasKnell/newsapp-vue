<template>
	<div class="article" :class="theme">
		<h1></h1>
		<p></p>
		<div class="metadata"></div>
	</div>
</template>

<script>
import { ARTICLE_SHAPE } from "../../shared/utils/article.js";

export default {
	computed: {
		theme() {
			return this.$store.state.theme;
		},
		article() {
			fetchArticle();
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
