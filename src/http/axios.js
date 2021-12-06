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
  if (res.data.code) {
    if (res.data.code === 1) {
      return res.data.data
    } else {
      Toast(res.data.msg)
      console.log(res)
    }
  } else {
    if (res.data.status === 0) {
      return res.data
    } else {
      Toast(res.data.msg)
    }
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
  if (res.data.code === 1) {
    return res.data.data
  } else {
    Toast('获取数据失败')
    console.log(res)
  }
}
