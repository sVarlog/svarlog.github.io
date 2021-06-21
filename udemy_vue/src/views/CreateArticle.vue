<template>
    <article-form 
        :initial-values="initialValues" 
        :errors="validationErrors" 
        :is-submitting="isSubmitting"
        @articleSubmit="onSubmit">
    </article-form>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/createArticle';
const ArticleForm = () => import('@/components/ArticleForm');

const CreateArticle = {
    data: () => ({
        initialValues: {
            title: '',
            description: '',
            body: '',
            tagList: []
        },
    }),
    computed: {
        ...mapState({
            isSubmitting: state => state.createArticle.isSubmitting,
            validationErrors: state => state.createArticle.validationErrors
        })
    },
    components: {
        ArticleForm
    },
    methods: {
        onSubmit(articleInput) {
            this.$store.dispatch(actionTypes.createArticle, {articleInput}).then(article => {
                this.$router.push({name: 'article', params: {slug: article.slug}});
            })
            console.log('onSubmit in create articles', articleInput);
        }
    }
}

export default CreateArticle;
</script>