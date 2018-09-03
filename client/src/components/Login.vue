<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
            <v-text-field
              v-model="email"
              label="Email"
              single-line
              solo
            ></v-text-field>
            <br>
            <v-text-field
              v-model="password"
              label="Password"
              single-line
              solo
            ></v-text-field>
            <br>
              <div class="error" v-html="error" />
            <br>
              <v-btn
                dark
                class = "blue"
                @click="login">Login
              </v-btn>
            </form>
          </div>
      </div>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // await and async are used instead of promises...
    async login () {
      try {
        await AuthenticationService.login({
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
</style>
