<template>
    <div class="app">
        <top-bar></top-bar>

        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from '@/components/Topbar.vue';
import { actionTypes } from '@/store/modules/auth';

const App = {
    components: {
        TopBar
    },
    created() {
        this.$store.dispatch(actionTypes.getCurrentUser);
    }
};
export default App;
</script>

<style></style>
