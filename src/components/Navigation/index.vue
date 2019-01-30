<template>
  <div :class="theme" class="navigation">
    <router-link :to="HOME_ROUTE" class="link" :class="theme">
      <i class="material-icons">home</i>
    </router-link>
    <router-link :to="SPORTS_ROUTE" class="link" :class="theme">
      <i class="material-icons">fitness_center</i>
    </router-link>
    <router-link :to="SCIENCE_ROUTE" class="link" :class="theme">
      <i class="material-icons">find_in_page</i>
    </router-link>
    <a href @click.prevent="showThemeSelect = !showThemeSelect" class="selection" :class="theme">
      <i class="material-icons">color_lens</i>
      <div v-show="showThemeSelect" class="popup" :class="theme">
        <a href v-on:click.prevent="changeTheme('dark')" class="themeButton">Dark</a>
        <a href v-on:click.prevent="changeTheme('light')" class="themeButton">Light</a>
        <a href v-on:click.prevent="changeTheme('fancy')" class="themeButton">Fancy</a>
      </div>
    </a>
  </div>
</template>

<script>
import routes from "../../shared/utils/routes.js";
import { mapMutations } from "vuex";

export default {
  data: () => {
    return {
      ...routes,
      showThemeSelect: false
    };
  },
  methods: {
    ...mapMutations(["changeTheme"])
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/global";

.navigation {
  position: fixed;
  width: $NAVIGATION_WIDTH;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  color: white;

  &.dark {
    background-color: $DARK_NAVIGATION_BG;
    color: $DARK_NAVIGATION_COLOR;
  }

  &.light {
    background-color: $LIGHT_NAVIGATION_BG;
    color: $LIGHT_NAVIGATION_COLOR;
  }
}

.link,
.selection {
  height: $NAVIGATION_WIDTH;
  width: 100%;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.link {
  &:hover,
  &:active {
    &.dark {
      color: $DARK_NAVIGATION_COLOR_HOVER;
    }

    &.light {
      color: $LIGHT_NAVIGATION_COLOR_HOVER;
    }
  }
}

i {
  font-size: 45px;
}

.selection {
  position: relative;
}

.popup {
  position: absolute;
  left: 100%;
  display: flex;
  height: 30px;

  &.dark {
    background-color: $DARK_NAVIGATION_BG;
    color: $DARK_NAVIGATION_COLOR;
  }

  &.light {
    background-color: $LIGHT_NAVIGATION_BG;
    color: $LIGHT_NAVIGATION_COLOR;
  }
}

.themeButton {
  line-height: 30px;
  font-size: 18px;
  width: 75px;
  padding: 0 10px;
}
</style>
