<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="yellow accent-2"
          light
          small
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs"
        class="song"
          :key="song.id">
          <v-layout>
            <!-- left side panel-->
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class = "blue"
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">
                View
              </v-btn>
            </v-flex>
            <!-- right side panel-->
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for the songs at the moment the songs component is loaded
    // the values come as part of the data payload
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 26px;
}
.song-artist {
  font-size: 22px;
}
.song-genre {
font-size: 18px;
}
.album-image {
  width: 60%;
  margin: 0 auto;
}
</style>
