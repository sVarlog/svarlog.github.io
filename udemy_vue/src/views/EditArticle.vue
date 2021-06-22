<template>
    <div>
        <loading v-if="isLoading"></loading>
        <article-form 
            v-else
            :initial-values="initialValues" 
            :errors="validationErrors" 
            :is-submitting="isSubmitting"
            @articleSubmit="onSubmit">
        </article-form>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/editArticle';
const ArticleForm = () => import('@/components/ArticleForm');
const Loading = () => import('@/components/Loading');

const CreateArticle = {
    data: () => ({
        
    }),
    computed: {
        ...mapState({
            isSubmitting: state => state.editArticle.isSubmitting,
            validationErrors: state => state.editArticle.validationErrors,
            isLoading: state => {console.log(state); return state.editArticle.isLoading},
            article: state => state.editArticle.article
        }),
        initialValues() {
            if (!this.article) {
                return {
                    title: '',
                    description: '',
                    body: '',
                    tagList: []
                }
            } else {
                return {
                    title: this.article.title,
                    description: this.article.description,
                    body: this.article.body,
                    tagList: this.article.tagList
                }
            }
        },
    },
    components: {
        ArticleForm,
        Loading
    },
    mounted() {
        this.$store.dispatch(actionTypes.getArticle, {
            slug: this.$route.params.slug
        })
    },
    methods: {
        onSubmit(articleInput) {
            const slug = this.$route.params.slug;
            this.$store
                .dispatch(actionTypes.updateArticle, {slug, articleInput})
                .then(article => {
                    this.$router.push({name: 'article', params: {slug: article.slug}});
                })
            console.log('onSubmit in create articles', articleInput);
        }
    }
}

export default CreateArticle;
</script>