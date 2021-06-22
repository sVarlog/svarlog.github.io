import Vue from 'vue';
import VueRouter from 'vue-router';
const GlobalFeed = () => import('@/views/GlobalFeed.vue');
const YourFeed = () => import('@/views/YourFeed.vue');
const TagFeed = () => import('@/views/TagFeed.vue');
const AppRegister = () => import('@/views/AppRegister.vue');
const Login = () => import('@/views/Login.vue');
const Article = () => import('@/views/Article.vue');
const CreateArticle = () => import('@/views/CreateArticle.vue');
const EditArticle = () => import('@/views/EditArticle');
const Settings = () => import('@/views/Settings');

Vue.use(VueRouter);

const routes = [
    {
        path: '/register',
        name: 'register',
        component: AppRegister
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'globalFeed',
        component: GlobalFeed
    },
    {
        path: '/feed',
        name: 'yourFeed',
        component: YourFeed
    },
    {
        path: '/tags/:slug',
        name: 'tag',
        component: TagFeed
    },
    {
        path: '/articles/new',
        name: 'createArticle',
        component: CreateArticle
    },
    {
        path: '/articles/:slug',
        name: 'article',
        component: Article
    },
    {
        path: '/articles/:slug/edit',
        name: 'editArticle',
        component: EditArticle
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/profiles/:slug',
        name: 'userProfile',
        component: GlobalFeed
    },
    {
        path: '/profiles/:slug/favorites',
        name: 'userProfileFavorites',
        component: GlobalFeed
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
