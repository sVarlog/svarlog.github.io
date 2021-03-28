<template>
    <div class="home-page">
        BANNER
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <feed :api-url="apiUrl"></feed>
                </div>
                <div class="col-md-3">
                    POPULAR TAGS
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Feed from '@/components/Feed';
const GlobalFeed = {
    data: () => ({
        apiUrl: '/articles'
    }),
    components: {
        Feed
    }
};
export default GlobalFeed;
</script>
