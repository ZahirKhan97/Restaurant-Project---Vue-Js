<template>
<h1>Welcome on Home Page</h1>
</template>

<script>
export default {
  name: 'HomeComponent',
  mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name:'LogIn'});
        }
    }
}
</script>

<style scoped>
</style>