<template>
    <div>{{message}}</div>
</template>

<script>
const ErrorMessage = {
    props: {
        message: {
            type: String,
            required: false,
            default: 'Something went wrong'
        }
    }
};
export default ErrorMessage;
</script>