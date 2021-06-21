import popularTagsApi from '@/api/popularTags';

const state = {
    data: null,
    isLoading: false,
    error: null
};

export const mutationTypes = {
    getPopularStart: '[popularTags] Get popular tags start',
    getPopularSuccess: '[popularTags] Get popular tags success',
    getPopularFailed: '[popularTags] Get popular tags failed'
};

export const actionTypes = {
    getPopularTags: '[popularTags] Get popular tags'
};

const mutations = {
    [mutationTypes.getPopularStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getPopularSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getPopularFailed](state) {
        state.isLoading = false;
    }
};

const actions = {
    [actionTypes.getPopularTags](context) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getPopularStart);
            popularTagsApi
                .getPopularTags()
                .then(tags => {
                    context.commit(mutationTypes.getPopularSuccess, tags);
                    resolve(tags);
                })
                .catch(() => {
                    context.commit(mutationTypes.getPopularFailed);
                });
        });
    }
};

export default {
    state,
    actions,
    mutations
};
