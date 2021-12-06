import { get, post } from './axios'

// 首页api
export const getSwiper = () => get('imglist')
// 登錄api
export const login = (data) => post('login', data)
// 获取user信息
export const getUserInfo = () => get('user')
// 退出登录
export const logout = () => get('logout')
// 注册
export const signin = (params) => post('register', params)

// 获取商品分类
export const getCategory = () => get('category')

// 获取商品列表
export const getGoodsList = (params) => get('goodslist', params)

// 获取商品详细信息
export const getGoodsInfo = (params) => get('goodsInfo', params)

// 获取购物车列表详细信息
export const getCartInfoList = (params) => get('shopcart', params)


// 保存地址信息
export const postAddress = (data) => post('address/save', data)

// - 显示收货地址
export const getAddressList = (params) => get('address', params)

// 删除地址
export const delAddress = (params) => get('address/del', params)

// 修改收货地址
export const updateAddress = (params) => get('address/edit', params)

// 获取默认收货地址
export const getDefaultAddress = (params) => get('address/def', params)

// 创建订单
export const createOrder = (data) => post('order/create', data)

// 获取订单列表
export const getOrderList = (params) => get('order/list', params)

// 获取订单详情
export const getOrderDetail = (params) => get('order/show', params)

// 取消订单
export const cancelOrder = (data) => post('order/cancel', data)

// 获取新闻列表
export const getNewsList = params => get('news/list', params)

// 获取新闻详情
export const getNewsDetail = params => get('news/show', params)

// 图片分类列表
export const getShare = params => get('photo/getimgcategory', params)

// 获取分类下的图片列表
export const getImgList = params => get('photo/getimages/', params)
// 获取图片详情
export const getImgDetail = params => get('photo/getimageInfo', params)

// 获取缩略图
export const getImgLazy = params => get('photo/getthumimages', params)
