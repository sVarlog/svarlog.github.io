import userProfileApi from '@/api/userProfile';

const state = {
    data: null,
    isLoading: false,
    error: null
};

export const mutationTypes = {
    getUserProfileStart: '[getUserProfile] getUserProfileStart',
    getUserProfileSuccess: '[getUserProfile] getUserProfileSuccess',
    getUserProfileFailed: '[getUserProfile] getUserProfileFailed'
};

export const actionTypes = {
    getUserProfile: '[getUserProfile] Get user profile'
};

const mutations = {
    [mutationTypes.getUserProfileStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getUserProfileSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getUserProfileFailure](state) {
        state.isLoading = false;
    }
};

const actions = {
    [actionTypes.getUserProfile](context, {slug}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getUserProfileStart);
            userProfileApi
                .getUserProfile(slug)
                .then(user => {
                    context.commit(mutationTypes.getUserProfileSuccess, user);
                    resolve(user);
                })
                .catch(() => {
                    context.commit(mutationTypes.getUserProfileFailed);
                });
        });
    }
};

export default {
    state,
    actions,
    mutations
};
