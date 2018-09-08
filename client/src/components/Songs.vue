<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel>
        <h3>Welcome</h3>
        <p>Check my Panel slot</p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
