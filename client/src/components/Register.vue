<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="email" />
            <br>
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="name" />
            <br>
            <input
                type="password"
                name="password"
                v-model="password"
                placeholder="current-password" />
            <br>
              <div class="error" v-html="error" />
            <br>
              <v-btn
                class = "cyan"
                @click="register">Register
              </v-btn>
            </form>
          </div>
      </div>
      </v-flex>
  </v-layout>
</template>

<script>
// The authentication service will send the data captured on the
// client to the server
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      name: '',
      password: '',
      error: null
    }
  },
  methods: {
    // await and async are used instead of promises...
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        // this block will display the error response from the server
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
  font-size: 14px
}
</style>
