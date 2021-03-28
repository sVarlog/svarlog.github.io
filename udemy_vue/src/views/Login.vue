<template>
    <div class="login">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <router-link :to="{ name: 'register' }"
                            >Need an account?</router-link
                        >
                    </p>
                    <validation-errors
                        v-if="validationErrors"
                        :validationErrors="validationErrors"
                    ></validation-errors>
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="Email"
                                v-model="email"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                type="password"
                                class="form-control form-control-lg"
                                placeholder="Password"
                                v-model="pass"
                            />
                        </fieldset>
                        <button
                            class="btn btn-lg btn-primary pull-xs-right"
                            :disabled="isSubmitting"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ValidationErrors from '@/components/ValidationErrors.vue';
import { actionTypes } from '@/store/modules/auth';

const Login = {
    data: () => ({
        email: '',
        pass: ''
    }),
    components: {
        ValidationErrors
    },
    computed: {
        ...mapState({
            isSubmitting: state => state.auth.isSubmitting,
            validationErrors: state => state.auth.validationErrors
        })
    },
    methods: {
        onSubmit() {
            console.log(actionTypes);
            this.$store
                .dispatch(actionTypes.login, {
                    email: this.email,
                    password: this.pass
                })
                .then(user => {
                    this.$router.push({ name: 'globalFeed' });
                    console.log('login success', user);
                });
        }
    }
};

export default Login;
</script>
