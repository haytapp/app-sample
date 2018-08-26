<template>
  <div>
    <h1>Register</h1>
    <form>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
        <br>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="current-password" />
        <br>
        <button @click="register">Register</button>
      </form>
  </div>
</template>

<script>
// The authentication service will send the data captured on the
// client to the server
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // await and async are used instead of promises...
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
