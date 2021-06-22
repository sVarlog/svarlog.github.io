import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage.js';

const state = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
};

export const mutationTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure',

    loginStart: '[auth] loginStart',
    loginSuccess: '[auth] loginSuccess',
    loginFailure: '[auth] loginFailure',

    getCurrentUserStart: '[auth] getCurrentUserStart',
    getCurrentUserSuccess: '[auth] getCurrentUserSuccess',
    getCurrentUserFailed: '[auth] getCurrentUserFailed',

    updateCurrentUserStart: '[auth] updateCurrentUserStart',
    updateCurrentUserSuccess: '[auth] updateCurrentUserSuccess',
    updateCurrentUserFailed: '[auth] updateCurrentUserFailed',

    logout: '[auth] logout'
};

export const actionTypes = {
    register: '[auth] register',
    login: '[auth] login',
    getCurrentUser: '[auth] getCurrentUser',
    updateCurrentUser: '[auth] updateCurrentUser',
    logout: '[auth] logout'
};

export const getterTypes = {
    currentUser: '[auth] currentUser',
    isLoggedIn: '[auth] isLoggedIn',
    isAnonymous: '[auth] isAnonymous'
};

const getters = {
    [getterTypes.currentUser]: state => {
        return state.currentUser;
    },
    [getterTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn);
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false;
    }
};

const mutations = {
    [mutationTypes.registerStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [mutationTypes.registerSuccess](state, payload) {
        state.currentUser = payload;
        state.isSubmitting = false;
        state.isLoggedIn = true;
    },
    [mutationTypes.registerFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },

    [mutationTypes.loginStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [mutationTypes.loginSuccess](state, payload) {
        state.currentUser = payload;
        state.isSubmitting = false;
        state.isLoggedIn = true;
    },
    [mutationTypes.loginFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },

    [mutationTypes.getCurrentUserStart](state) {
        state.isLoading = true;
    },
    [mutationTypes.getCurrentUserSuccess](state, payload) {
        state.isLoading = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    [mutationTypes.getCurrentUserFailed](state) {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
    },
    [mutationTypes.yodateCurrentUserStart]() {},
    [mutationTypes.updateCurrentUserSuccess](state, payload) {
        state.currentUser = payload;
    },
    [mutationTypes.updateCurrentUserFailed]() {},
    [mutationTypes.logout](state) {
        state.currentUser = null;
        state.isLoggedIn = false;
    }
};

const actions = {
    [actionTypes.register](context, credentials) {
        return new Promise(resolve => {
            context.commit(mutationTypes.registerStart);
            authApi
                .register(credentials)
                .then(response => {
                    context.commit(
                        mutationTypes.registerSuccess,
                        response.data.user
                    );
                    setItem('accessToken', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch(result => {
                    context.commit(
                        mutationTypes.registerFailure,
                        result.response.data.errors
                    );
                });
        });
    },
    [actionTypes.login](context, credentials) {
        return new Promise(resolve => {
            context.commit(mutationTypes.loginStart);
            authApi
                .login(credentials)
                .then(response => {
                    context.commit(
                        mutationTypes.loginSuccess,
                        response.data.user
                    );
                    setItem('accessToken', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch(result => {
                    context.commit(
                        mutationTypes.loginFailure,
                        result.response.data.errors
                    );
                });
        });
    },
    [actionTypes.getCurrentUser](context) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getCurrentUserStart);
            authApi
                .getCurrentUser()
                .then(response => {
                    context.commit(
                        mutationTypes.getCurrentUserSuccess,
                        response.data.user
                    );
                    resolve(response.data.user);
                })
                .catch(() => {
                    context.commit(mutationTypes.getCurrentUserFailed);
                });
        });
    },
    [actionTypes.updateCurrentUser](context, {currentUserInput}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.updateCurrentUserStart);
            authApi
                .updateCurrentUser(currentUserInput)
                .then(user => {
                    context.commit(mutationTypes.updateCurrentUserSuccess, user);
                    resolve(user);
                })
                .catch((result) => {
                    context.commit(mutationTypes.updateCurrentUserFailed, result.response.data.errors);
                });
        });
    },
    [actionTypes.logout](context) {
        return new Promise(resolve => {
            setItem('accessToken', '');
            context.commit(mutationTypes.logout);
            resolve();
        })
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
