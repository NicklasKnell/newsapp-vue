import Vue from "vue";

import Router from "vue-router";
import Home from "./views/Home";
import Sports from "./views/Sports";
import Science from "./views/Science";
import ArticleDetail from "./views/ArticleDetail";

import links from "./shared/utils/routes";

Vue.use(Router);

const routes = [
    { path: links.HOME_ROUTE, component: Home },
    { path: links.SPORTS_ROUTE, component: Sports },
    { path: links.SCIENCE_ROUTE, component: Science },
    { path: links.ARTICLE_DETAIL_ROUTE, component: ArticleDetail }
];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
});
