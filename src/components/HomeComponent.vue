<template>
    <h1 class="text-center mb-4">Hello {{ admin }}, Welcome to the Home Page</h1>
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">Restaurant List</h5>
      </div>
      <div class="card-body">
        <table class="table table-hover table-bordered text-center align-middle">
          <thead class="table-light">
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="restaurant in restaurants" :key="restaurant.id">
              <td>
                <img :src="restaurant.logo" alt="" width="100" height="100" class="rounded-circle" />
              </td>
              <td>{{ restaurant.name }}</td>
              <td>{{ restaurant.address }}</td>
              <td>{{ restaurant.contact }}</td>
              <td>
                <button class="btn btn-sm btn-info me-2">View</button>
                <router-link :to="`/update-restaurant/${restaurant.id}`" class="btn btn-sm btn-warning me-2">Edit</router-link>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="restaurants.length === 0" class="text-center text-muted mt-3">No restaurants found.</p>
      </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'HomeComponent',
    data() {
        return {
            admin: '',
            restaurants: []
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.admin = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'LogIn' });
        }
        let response = await axios.get('http://localhost:3000/restaurant');
        this.restaurants = response.data;
    }
}
</script>

<style scoped></style>