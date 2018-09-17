<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Log In">
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
              @click="login">Login
            </v-btn>
        </form>
      </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    // await and async are used instead of promises...
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
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
</style>
