<template>
  <div class="navigation">
    <router-link :to="HOME_ROUTE">HOME</router-link>
    <router-link :to="SPORTS_ROUTE">SPORTS</router-link>
    <router-link :to="SCIENCE_ROUTE">SCIENCE</router-link>
  </div>
</template>

<script>
import routes from "../../shared/utils/routes.js";

export default {
  data: () => {
    return {
      ...routes
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared/global";

.navigation {
  position: fixed;
  width: $NAVIGATION_WIDTH;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #090e28;
  color: #ffffff;
}

a {
  height: $NAVIGATION_WIDTH;
}
</style>
