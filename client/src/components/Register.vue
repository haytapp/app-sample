<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="tab-tracker-register-form"
            autocomplete="off">
            <v-text-field
              v-model="email"
              label="Email"
              single-line
              solo
            ></v-text-field>
            <br>
            <v-text-field
              v-model="name"
              label="Name"
              single-line
              solo
            ></v-text-field>
            <br>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              single-line
              solo
            ></v-text-field>
            <br>
              <div class="error" v-html="error" />
            <br>
              <v-btn
                dark
                class = "blue"
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
        const response = await AuthenticationService.register({
          email: this.email,
          name: this.name,
          password: this.password
        })
        // Calling the Vuex methods to update the token parameter
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
