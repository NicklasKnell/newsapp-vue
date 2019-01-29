<template>
  <div class="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
    components: { Navigation },
    data: () => {
        return {
            bla: 1
        };
    }
};
</script>


<style lang="scss" scoped>
@import './shared/global';

.app {
    margin-left: $NAVIGATION_WIDTH;
    height: 100%;
}
</style>
