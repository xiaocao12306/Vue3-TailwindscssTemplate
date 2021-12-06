/**
 * #### 移除数组中的一项
 * @param {Array} arr 数组
 * @param {*} el 移除项
 */
export const remove = (arr, el) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}