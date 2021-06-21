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
                        ADD TO FAVORITS
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
<<<<<<< HEAD
import {stringify, parseUrl} from 'query-string';
const Pagination = () => import('@/components/Pagination');
const Loading = () => import('@/components/Loading');
const ErrorMessage = () => import('@/components/ErrorMessage');
const TagList = () => import('@/components/TagList');
=======
import Pagination from '@/components/Pagination';
import {limit} from '@/helpers/variables';
import {stringify, parseUrl} from 'query-string';
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973

const Feed = {
    props: {
        apiUrl: String,
        required: true
    },
    data: () => ({
<<<<<<< HEAD
        total: 500,
        limit: 10,
=======
        limit,
        url: '/tags/dragons'
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973
    }),
    components: {
        Pagination,
        Loading,
        ErrorMessage,
        TagList
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
<<<<<<< HEAD
        currentPage() {
            return Number(this.$route.query.page || 1)
        },
        baseUrl() {
            return this.$route.path
        },
        offset() {
            return this.currentPage * this.limit - this.limit;
=======
        baseUrl() {
            return this.$route.path
        },
        currentPage() {
            return Number(this.$route.query.page || '1')
        },
        offset() {
            return this.currentPage * limit - limit;
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973
        }
    },
    watch: {
        currentPage() {
<<<<<<< HEAD
            console.log('current page changed');
=======
            console.log('change url', this.offset);
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973
            this.fetchFeed();
        }
    },
    mounted() {
        console.log('init feed');
<<<<<<< HEAD
        console.log(this.apiUrl);
=======
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973
        this.fetchFeed();
    },
    methods: {
        fetchFeed() {
<<<<<<< HEAD
            const parsedUrl = parseUrl(this.apiUrl);
            const stringifiedParams = stringify({
                ...parsedUrl.query,
                limit: this.limit,
                offset: this.offset, 
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
            console.log(apiUrlWithParams);
            this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams});
=======
            let parsedUrl = parseUrl(this.apiUrl);
            const stringifyedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParans = `${parsedUrl.url}?${stringifyedParams}`;
            this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParans });
>>>>>>> b8378e9ec52361eaf4fc4754ed023538a4005973
        }
    }
};
export default Feed;
</script>
