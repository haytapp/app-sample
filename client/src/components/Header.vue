<template>
    <v-toolbar fixed class="blue" dark>
        <v-toolbar-title class="mr-4">
            <span
              class = "home"
              @click="navigateTo({name: 'Home'})">
              TabTracker
            </span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark
                @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat dark
                v-if="!$store.state.isUserLoggedIn"
                @click="navigateTo({name: 'Login'})">
                Login
            </v-btn>
            <v-btn flat dark
                v-if="!$store.state.isUserLoggedIn"
                @click="navigateTo({name: 'Register'})">
                Sign Up
            </v-btn>

            <v-btn flat dark
                v-if="$store.state.isUserLoggedIn"
                @click="logout">
                Log Out
            </v-btn>

        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      // clear the token and the user
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor: pointer;
}
</style>
