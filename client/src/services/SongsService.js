import Api from '@/services/Api'

export default {
  index () {
    // this service will be available on /songs path
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
