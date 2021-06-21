<template>
    <div class="home-page">
        <banner></banner>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <feed-toggler></feed-toggler>
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

const YourFeed = {
    data: () => ({
        apiUrl: '/articles/feed'
    }),
    components: {
        Feed,
        PopularTags,
        Banner,
        FeedToggler
    }
};
export default YourFeed;
</script>
