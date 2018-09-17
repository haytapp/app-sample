<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Information">
        <v-text-field
          v-model="song.title"
          label="Title"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.artist"
          label="Artist"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.genre"
          label="Genre"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.album"
          label="Album"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image URL"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.youtubeId"
          label="Youtube ID"
          single-line
          solo
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Details" class="ml-4">
        <v-text-field
          v-model="song.lyrics"
          label="Lyrics"
          multi-line
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.tab"
          label="Tab"
          multi-line
        ></v-text-field>
      </panel>
      <v-btn
        dark
        class = "blue"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    // await and async are used instead of promises...
    async create () {
      try {
        // call API
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
