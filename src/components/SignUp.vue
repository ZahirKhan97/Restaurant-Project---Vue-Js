<template>
    <div class="container-fluid bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="text-center">
            <img alt="Resto logo" src="../assets/resto-logo.png" style="width: 150px;" />
        </div>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow-lg p-4" style="width: 28rem;">
                <h2 class="text-center mb-4">Sign Up</h2>
                <div class="mb-2">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter your name"
                        required />
                </div>
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
                <button type="submit" v-on:click="signUp" class="btn btn-primary w-100">Sign Up</button>
                <p class="text-center mt-3">
                    Already have an account?
                    <Router-link to="/login" class="text-decoration-none">Login</Router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async signUp() {
            console.log('Sign Up:', this.name, this.email, this.password);
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            })

            if (result.status == 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data))
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