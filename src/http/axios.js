import axios from 'axios'
import { Toast } from 'vant'
import { HOST } from '../config'

axios.defaults.baseURL = HOST.build
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => {
    if (localStorage && localStorage.getItem('Authorization')) {
      const token = localStorage.getItem('Authorization')
      token && (config.headers.Authorization = token)
      console.log('get Authorization success=>', token)
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.error(error)
  }
)

// 封装请求
/**
 *
 * @param {String} url
 * @param {*} data
 * @returns
 */
export async function get(url, params) {
  const res = await axios({
    url, params, method: 'GET'
  })
  if (res.status === 200) {
    return res.data
  } else {
    Toast(res.status)
    console.log(res)
  }
} 
/**
 *
 * @param {String} url
 * @param {*} data
 * @returns
 */
export async function post(url, data) {
  const res = await axios({
    url, data, method: 'POST'
  })
  if (res.status === 200 || res.status === 201) {
    return res.data
  } else {
    Toast(res.status)
    console.log(res)
  }
}

export async function put (url, data) {
  const res = await axios({
    url,data, method:'PUT'
  })

  if (res.status === 200) {
    return res.data
  } else {
    Toast(res.status)
    console.log(res)
  }
}