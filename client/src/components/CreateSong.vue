<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Information">
        <v-text-field
          v-model="song.title"
          label="Title"
          single-line
          required
          :rules="[required]"
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.artist"
          label="Artist"
          single-line
          required
          :rules="[required]"
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.genre"
          label="Genre"
          required
          :rules="[required]"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.album"
          label="Album"
          required
          :rules="[required]"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image URL"
          required
          :rules="[required]"
          single-line
          solo
        ></v-text-field>
        <br>
        <v-text-field
          v-model="song.youtubeId"
          label="Youtube ID"
          required
          :rules="[required]"
          single-line
          solo
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Details" class="ml-4">
        <v-textarea
          v-model="song.lyrics"
          label="Lyrics"
          required
          :rules="[required]"
          multi-line
        ></v-textarea>
        <br>
        <v-textarea
          v-model="song.tab"
          label="Tab"
          required
          :rules="[required]"
          multi-line
        ></v-textarea>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
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
      },
      error: null,
      required: (value) => !!value || 'Required value'
    }
  },
  components: {
    Panel
  },
  methods: {
    // await and async are used instead of promises...
    async create () {
      this.error = null
      const areAllFieldsCaptured = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsCaptured) {
        this.error = 'Please enter all required fields'
        return
      }
      try {
        // call API
        await SongsService.post(this.song)
        // redirecting to songs page
        this.$router.push({
          name: 'songs'
        })
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
