<template>
    <div class="container-fluid bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="text-center">
            <img alt="Resto logo" src="../assets/resto-logo.png" style="width: 150px;" />
        </div>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow-lg p-4" style="width: 28rem;">
                <h2 class="text-center mb-4">Log In</h2>
                <div class="mb-2">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" v-model="email" id="email" class="form-control" placeholder="Enter your email"
                        required />
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" v-model="password" class="form-control"
                        placeholder="Enter your password" required />
                </div>
                <button type="submit" v-on:click="logIn" class="btn btn-primary w-100">Login</button>
                <p class="text-center mt-3">
                    Don't have an account?
                    <Router-link to="/sign-up" class="text-decoration-none">Sign Up</Router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async logIn() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'});
            }
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({name:'Home'});
        }
    }
}
</script>