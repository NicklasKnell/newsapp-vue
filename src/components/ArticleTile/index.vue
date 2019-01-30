<template>
	<div :class="theme" class="article">
		<router-link :class="theme" class="title" :to="articleLink">{{title}}</router-link>
		<p>{{content}}</p>
		<router-link :class="theme" class="button" :to="articleLink">More</router-link>
		<div v-if="author || releaseDate" class="metadata">
			<div v-if="author">
				<i class="material-icons">person_outline</i>
				<span>{{author}}</span>
			</div>
			<span v-if="author && releaseDate" class="separator">|</span>
			<div v-if="releaseDate">
				<i class="material-icons">date_range</i>
				<span>{{releaseDate}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { ARTICLE_SHAPE } from "../../shared/utils/article";

export default {
	props: { ...ARTICLE_SHAPE },
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
@import "../../shared/global";

.article {
	background-color: white;
	color: black;
	border: solid 2px white;
	padding: 20px 30px;
	font-weight: 300;
	font-size: 25px;

	&.dark {
		background-color: $DARK_ARTICLE_BG;
		color: $DARK_ARTICLE_COLOR;
		border-color: $DARK_ARTICLE_BORDER;
	}

	&.light {
		background-color: $LIGHT_ARTICLE_BG;
		color: $LIGHT_ARTICLE_COLOR;
		border-color: $LIGHT_ARTICLE_BORDER;
	}
}

.metadata {
	margin-top: 50px;
	display: flex;
	justify-content: flex-end;

	div {
		display: inline-flex;
		align-items: center;

		i {
			padding-right: 5px;
		}
	}
}

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

.separator {
	width: 20px;
	text-align: center;
}
</style>

