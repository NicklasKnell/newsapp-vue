<template>
	<Page :articles="articles"></Page>
</template>

<script>
import Page from "../../components/Page";

import {
	fetchArticles,
	SPORTS_REQUEST
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
	mounted: function() {
		console.log("Fetched", SPORTS_REQUEST);
		fetchArticles(SPORTS_REQUEST)
			.then(data => {
				this.articles = data;
			})
			.catch(error => {
				console.log(error);
			});
	}
};
</script>
