<template>
    <h1>Hello {{ admin }}, Welcome on Home Page</h1>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            admin: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.admin = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'LogIn' });
        }
    }
}
</script>

<style scoped></style>