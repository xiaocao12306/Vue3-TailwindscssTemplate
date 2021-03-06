import { get, post, put } from './axios'

// 获取新闻列表
export const getNewsList = params => get('article/list')

/**
 * - 获取文章详情
 * @param {number} pathParams  id
 * @returns 
 */
export const getNewsDetail = pathParams => get(`/article/detail/${pathParams}`)

/**
 * - 获取用户信息
 * @param {number} pathParams  用户id
 * @returns 
 */
export const getUser = pathParams => get(`/user/detail/${pathParams}/`)

/**
 * 
 * @param {*} data 用户信息 
 * @param {Object} {id:账号,username:账户名,password:密码}
 * @returns 
 */
export const signin = data => post('/user/list/', data)

// 获取题目
export const getGames = () => get('/answer/type/')

/**
 * - 答对加分
 * @param {number} userId 
 * @returns 
 */
export const answerCountAdd = (userId) => put(`/answer/count_add/${userId}/`)

export const spamReco = params => post('/ai/predict/', params)