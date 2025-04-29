<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg px-4 mb-2">
        <router-Link class="navbar-brand d-flex align-items-center" to="/">
            <img src="../assets/resto-logo.png" alt="Resto Logo" style="width: 50px; height: 50px;" class="me-2" />
            <span class="fw-bold fs-4">Resto</span>
        </router-Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item mx-2">
                    <router-link class="nav-link active fw-semibold text-primary" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item mx-2">
                    <router-link class="nav-link fw-semibold" to="/add-restaurant">Add Restaurant</router-link>
                </li>
                <li class="nav-item mx-2" v-if="login">
                    <a v-on:click="logout" class="btn btn-primary px-4 py-2" href="#">Logout</a>
                </li>
                <li class="nav-item mx-2" v-else>
                    <a class="btn btn-primary px-4 py-2" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            login: true
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.login = false;
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'LogIn' })
        }
    }
}
</script>