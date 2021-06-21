<template>
    <div class="home-page">
        <banner></banner>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <feed-toggler :tag-name="tagName"></feed-toggler>
                    <feed :api-url="apiUrl"></feed>
                </div>
                <div class="col-md-3">
                    <popular-tags></popular-tags>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner';
import PopularTags from '@/components/PopularTags'
import Feed from '@/components/Feed';
import FeedToggler from '@/components/FeedToggler';

const TagFeed = {
    computed: {
        tagName() {
            return this.$route.params.slug;
        },
        apiUrl() {
            return `/articles?tag=${this.tagName}`;
        }
    },
    components: {
        Feed,
        PopularTags,
        Banner,
        FeedToggler
    }
};
export default TagFeed;
</script>
