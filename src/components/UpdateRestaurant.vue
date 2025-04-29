<template>
    <h1 class="text-center mb-4">Update a Restaurant</h1>
    <div class="container">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Restaurant Info</h5>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="name" class="form-label"><strong>Restaurant Name</strong></label>
                            <input type="text" id="name" v-model="restaurant.name" class="form-control"
                                placeholder="Enter restaurant name" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="contact" class="form-label"><strong>Contact</strong></label>
                            <input type="text" id="contact" v-model="restaurant.contact" class="form-control"
                                placeholder="Enter contact number" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="address" class="form-label"><strong>Address</strong></label>
                            <input type="text" id="address" v-model="restaurant.address" class="form-control"
                                placeholder="Enter restaurant address" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="logo" class="form-label"><strong>Logo</strong></label>
                            <input type="text" id="logo" v-model="restaurant.logo" class="form-control"
                                placeholder="Enter Logo URL" />
                        </div>
                    </div>
                    <div class="text-end mt-4">
                        <router-link to="/" class="btn btn-secondary">
                            Back
                        </router-link>
                        <button type="button" v-on:click="updateRestaurant" class="btn btn-primary ms-2">
                            Update Restaurant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'UpdateRestaurantComponent',
    data() {
        return {
            restaurant: {
                name: '',
                contact: '',
                address: '',
                logo: ''
            }
        }
    },
    async mounted() {
        const response = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
        this.restaurant = response.data
    },
    methods: {
        async updateRestaurant() {
            let response = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
                logo: this.restaurant.logo
            })
            if (response.status == 200) {
                this.$router.push({ name: 'Home' })
            }
            alert('Restaurant updated successfully!')
        }
    }
}
</script>