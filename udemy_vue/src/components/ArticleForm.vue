<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-10 offset-md-1 col-xs-12">
                    <validation-errors v-if="errors" :validationErrors="errors"></validation-errors>
                    <form @submit.prevent="onSubmit">
                        <fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Article title" v-model="title">
                            </fieldset>

                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Description" v-model="description">
                            </fieldset>

                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg" placeholder="What is this article about?" v-model="body"></textarea>
                            </fieldset>

                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Enter tags" v-model="tagList">
                            </fieldset>

                            <fieldset class="form-group">
                                <button type="submit" class="btn btn-lg pull-xs-right btn-primary" :disabled="isSubmitting">Publish article</button>
                            </fieldset>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const ValidationErrors = () => import('@/components/ValidationErrors');

const ArticleForm = {
    props: {
        initialValues: {
            type: Object,
            required: true
        },
        errors: {
            type: Object,
            required: false
        },
        isSubmitting: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        title: '',
        description: '',
        body: '',
        tagList: ''
    }),
    components: {
        ValidationErrors
    },
    methods: {
        onSubmit() {
            const form = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList.split(' ')
            };
            this.$emit('articleSubmit', form);
        }
    }
}
export default ArticleForm;
</script>