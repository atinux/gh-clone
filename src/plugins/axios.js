import Vue from 'vue'
import axios from 'axios'

const $axios = axios.create({
  baseURL: 'https://api.github.com'
})

$axios.setToken = (token) => {
  if (!token) {
    delete $axios.defaults.headers.common.Authorization
    return
  }
  $axios.defaults.headers.common.Authorization = `token ${token}`
}

// Add to Vue prototype
Vue.prototype.$axios = $axios
