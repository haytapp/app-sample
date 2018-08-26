import Api from '@/services/Api'

// Example: This service will call the API method from
// AuthenticationService.register({
//   email: 'alex.fraga@gmail.com',
//   password: '1234'
// })

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
