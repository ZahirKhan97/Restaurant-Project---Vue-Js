<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-lg p-4" style="width: 28rem;">
            <h2 class="text-center mb-4">Sign Up</h2>
            <form>
                <div class="mb-2">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-control" placeholder="Enter your name"
                        required />
                </div>
                <div class="mb-2">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control"
                        placeholder="Enter your email" required />
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" class="form-control"
                        placeholder="Enter your password" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Sign Up</button>
            </form>
            <p class="text-center mt-3">
                Already have an account?
                <a href="#" class="text-decoration-none">Log in</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>