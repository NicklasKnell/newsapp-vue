<template>
	<Page :articles="articles"></Page>
</template>

<script>
import Page from "../../components/Page";

import {
	fetchArticles,
	HOME_REQUEST
} from "../../shared/utils/articleRequests";

export default {
	components: {
		Page
	},
	data: () => {
		return {
			articles: []
		};
	},
	mounted() {
		fetchArticles(HOME_REQUEST)
			.then(data => {
				this.articles = data;
			})
			.catch(error => {
				console.log(error);
			});
	}
};
</script>
