import Vue from "vue";

import Router from "vue-router";
import Home from "./views/Home";

import links from './shared/utils/routes';

Vue.use(Router);

const routes = [{ path: links.HOME_ROUTE, component: Home }];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
});
