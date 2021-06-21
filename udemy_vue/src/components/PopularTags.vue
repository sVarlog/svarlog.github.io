<template>
    <div>
        <loading v-if="isLoading"></loading>
        <error-message v-if="error"></error-message>

        <div class="sidebar" v-if="popularTags">
            <p>Popular Tags</p>
            <div class="tag-list">
                <router-link class="tag-default tag-pill" v-for="tag in popularTags" :key="tag" :to="{name: 'tag', params: {slug: tag}}">{{tag}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/popularTags';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

const PopularTags = {
    computed: {
        ...mapState({
            isLoading: state => state.popularTags.isLoading,
            error: state => state.popularTags.error,
            popularTags: state => state.popularTags.data
        })
    },
    components: {
        Loading,
        ErrorMessage
    },
    mounted() {
        console.log(this);
        this.$store.dispatch(actionTypes.getPopularTags)
    },
};
export default PopularTags;
</script>