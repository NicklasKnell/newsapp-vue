<template>
	<div :class="`app ${theme}`">
		<Navigation></Navigation>
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
	components: { Navigation },
	computed: {
		theme() {
			return this.$store.state.theme;
		}
	}
};
</script>


<style lang="scss" scoped>
@import "./shared/global";

.app {
	margin-left: $NAVIGATION_WIDTH;
	min-height: 100%;

	&.dark {
		background-color: $DARK_PAGE_BG;
	}

	&.light {
		background-color: $LIGHT_PAGE_BG;
	}
}
</style>
