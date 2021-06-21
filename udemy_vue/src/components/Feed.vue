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
                :total="total" 
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
const Pagination = () => import('@/components/Pagination');
const Loading = () => import('@/components/Loading');
const ErrorMessage = () => import('@/components/ErrorMessage');
const TagList = () => import('@/components/TagList');

const Feed = {
    props: {
        apiUrl: String,
        required: true
    },
    data: () => ({
        total: 500,
        limit: 10,
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
            console.log('current page changed');
            this.fetchFeed();
        }
    },
    mounted() {
        console.log('init feed');
        console.log(this.apiUrl);
        this.fetchFeed();
    },
    methods: {
        fetchFeed() {
            const parsedUrl = parseUrl(this.apiUrl);
            const stringifiedParams = stringify({
                ...parsedUrl.query,
                limit: this.limit,
                offset: this.offset, 
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
            console.log(apiUrlWithParams);
            this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams});
        }
    }
};
export default Feed;
</script>
