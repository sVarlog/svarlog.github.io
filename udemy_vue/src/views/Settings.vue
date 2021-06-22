<template>
    <div class="settings-page" v-if="currentUser">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Settings</h1>
                    <validation-errors v-if="validationErrors" :validation-errors="validationErrors"></validation-errors>
                    <form @submit.prevent="onSubmit">
                        <fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="URL of picture" v-model="form.image">
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Username" v-model="form.username">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg" placeholder="Short bio about you" v-model="form.bio"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="email" class="form-control form-control-lg" placeholder="Email" v-model="form.email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="form.password">
                            </fieldset>
                            <button type="submit" class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Update settings</button>
                        </fieldset>
                    </form>
                    <hr/>
                    <button class="btn btn-outline-danger" @click="logout">Or click here to logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import {getterTypes as authGetterTypes, actionTypes as authActionTypes} from '@/store/modules/auth';
import ValidationErrors from '@/components/ValidationErrors';

const Settings = {
    computed: {
        ...mapState({
            isSubmitting: state => state.settings.isSubmitting,
            validationErrors: state => state.settings.validationErrors
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        form() {
            return {
                username: this.currentUser.username,
                bio: this.currentUser.bio,
                image: this.currentUser.image,
                email: this.currentUser.email,
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submitted settings', this.form);
            this.$store.dispatch(authActionTypes.updateCurrentUser, {currentUserInput: this.form})
        },
        logout() {
            console.log('logout');
            this.$store.dispatch(authActionTypes.logout).then(() => {
                this.$router.push({name: 'globalFeed'})
            })
        }
    },
    components: {
        ValidationErrors
    }
}
export default Settings;
</script>