<template>
    <div class="article-page">
        <div class="banner">
            <div class="container" v-if="article">
                <h1>{{article.title}}</h1>
                <div class="article-meta">
                    <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}"><img :src="article.author.image" alt=""></router-link>
                    <div class="info">
                        <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">{{article.author.username}}</router-link>
                        <span class="date">{{article.createdAt}}</span>
                    </div>
                    <span v-if="isAuthor">
                        <router-link class="btn btn-outline-secondary btn-sm" :to="{name: 'editArticle', params: {slug: article.slug}}">
                            <i class="ion-edit"></i>
                            Edit Article
                        </router-link>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
                            <i class="ion-trash-a"></i>
                            Delete Article
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="container page">
            <loading v-if="isLoading"></loading>
            <error-message v-if="error" :message="error"></error-message>
            <div class="row article-content" v-if="article">
                <div class="col-xs-12">
                    <div>
                        <p>{{article.body}}</p>
                    </div>
                    <tag-list :tags="article.tagList"></tag-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {actionTypes as articleAtionTypes} from '@/store/modules/article';
import {getterTypes as authGetterTypes} from '@/store/modules/auth';
import {mapState, mapGetters} from 'vuex';
const Loading = () => import('@/components/Loading');
const ErrorMessage = () => import('@/components/ErrorMessage');
const TagList = () => import('@/components/TagList');

const Article = {
    data: () => ({

    }),
    components: {
        Loading,
        ErrorMessage,
        TagList
    },
    computed: {
        ...mapState({
            isLoading: state => state.article.isLoading,
            error: state => state.article.error,
            article: state => state.article.data
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isAuthor() {
            if (!this.currentUser || !this.article) {
                return false
            }
            return this.currentUser.username === this.article.author.username
        }
    },
    created() {
        this.$store.dispatch(articleAtionTypes.getArticle, {slug: this.$route.params.slug});
    },
    methods: {
        deleteArticle() {
            this.$store.dispatch(articleAtionTypes.deleteArticle, {slug: this.$route.params.slug})
            .then(() => {
                this.$router.push({name: 'globalFeed'})
            })
        }
    },
}
export default Article;
</script>