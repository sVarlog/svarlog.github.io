<template>
    <div>
        <loading v-if="isLoading"></loading>
        <error-message v-if="error"></error-message>
        <div v-if="feed">
            <div
                class="article-preview"
                v-for="(article, index) in feed.articles"
                :key="index"
            >
                <div class="article-meta">
                    <router-link
                        :to="{
                            name: 'userProfile',
                            params: { slug: article.author.username }
                        }"
                    >
                        <img :src="article.author.image" alt="" />
                    </router-link>
                    <div class="info">
                        <router-link
                            :to="{
                                name: 'userProfile',
                                params: { slug: article.author.username }
                            }"
                            class="author"
                        >
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ article.createdAt }}</span>
                    </div>
                    <div class="pull-xs-right">
                        <add-to-favorites :is-favorited="article.favorited" :article-slug="article.slug" :favorites-count="article.favoritesCount"></add-to-favorites>
                    </div>
                </div>
                <router-link
                    :to="{ name: 'article', params: { slug: article.slug } }"
                    class="preview-link"
                >
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                    <tag-list :tags="article.tagList"></tag-list>
                </router-link>
            </div>
            <pagination 
                :total="feed.articlesCount" 
                :limit="limit"
                :current-page="currentPage"
                :url="baseUrl"
            ></pagination>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/feed';
import {stringify, parseUrl} from 'query-string';
import {limit} from '@/helpers/variables';
const Pagination = () => import('@/components/Pagination');
const Loading = () => import('@/components/Loading');
const ErrorMessage = () => import('@/components/ErrorMessage');
const TagList = () => import('@/components/TagList');
const AddToFavorites = () => import('@/components/AddToFavorites');

const Feed = {
    props: {
        apiUrl: String,
        required: true
    },
    data: () => ({
        limit,
        url: '/tags/dragons'
    }),
    components: {
        Pagination,
        Loading,
        ErrorMessage,
        TagList,
        AddToFavorites
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        currentPage() {
            return Number(this.$route.query.page || 1)
        },
        baseUrl() {
            return this.$route.path
        },
        offset() {
            return this.currentPage * this.limit - this.limit;
        }
    },
    watch: {
        currentPage() {
            this.fetchFeed();
        },
        apiUrl() {
            this.fetchFeed();
        }
    },
    mounted() {
        this.fetchFeed();
    },
    methods: {
        fetchFeed() {
            let parsedUrl = parseUrl(this.apiUrl);
            const stringifyedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParans = `${parsedUrl.url}?${stringifyedParams}`;
            this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParans });
        }
    }
};
export default Feed;
</script>
