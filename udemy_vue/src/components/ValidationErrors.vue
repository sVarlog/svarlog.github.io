<template>
    <ul class="error-messages">
        <li v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>

<script>
const ValidationErrors = {
    props: {
        validationErrors: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages() {
            return Object.keys(this.validationErrors).map(name => {
                const messages = this.validationErrors[name].join(', ');
                return `${name} ${messages}`;
            });
        }
    }
};
export default ValidationErrors;
</script>
