<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something error</div>
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
                    TAG LIST
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
import Pagination from '@/components/Pagination';
import {limit} from '@/helpers/variables';
import {stringify, parseUrl} from 'query-string';

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
        Pagination
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        baseUrl() {
            return this.$route.path
        },
        currentPage() {
            return Number(this.$route.query.page || '1')
        },
        offset() {
            return this.currentPage * limit - limit;
        }
    },
    watch: {
        currentPage() {
            console.log('change url', this.offset);
            this.fetchFeed();
        }
    },
    mounted() {
        console.log('init feed');
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
