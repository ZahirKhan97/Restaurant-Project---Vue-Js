<template>
  <div class="container-fluid bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="text-center">
      <img alt="Resto logo" src="./assets/resto-logo.png" style="width: 150px;" />
    </div>
    <SignUp />
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue';


export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style>
</style>
