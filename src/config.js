export let HOST = {
  dev: "http://127.0.0.1:4523/mock/449967/",
  build: 'http://172.18.12.13:8000/',
}

export const avatarArr = [
  'http://img.yao51.com/jiankangtuku/ijidbeifz.jpeg',
  'https://www.mp3pc.com/uploads/0df1cf65ae7ff1eb30953a749295338d.jpg',
  'https://lh3.googleusercontent.com/proxy/62l1mZEpEqoMJfJWd1cjLhP-4GY3jCuMMFgUwDQHgy0nKjHOOfxcO2c55ooEAEYuUkBNTWEmF9eifEnBPifJQYNkuhGUjWFsK_rsP6PPRjdJ67eNSvQ',
  'http://inews.gtimg.com/newsapp_bt/0/13203975776/1000.jpg',
  'https://y.qichejiashi.com/tupian/upload/275074325.jpg',
  'http://image.biaobaiju.com/uploads/20191228/dab81eb26a4074ea8c1ee431fb81b62f.jpg',
  'https://imgo168.928vbi.com/img2021/8/30/11/2021083072929262.jpg',
  'https://lh3.googleusercontent.com/proxy/E3bPKleQ8T8C_Wi_Jq-FpOkeMiZyxXTfNhg0NXIsTPpg50m9z8Mis5g-0QKNG1cuY8s3KPP4j0dlTdRfie0ATrQ-PIoYHmtjp3CMhCoPaectPRozf_U_EESL1A'
]

export const aboutRubish = () => {
  let map = new Map()
  map.set('厨余垃圾', '厨余垃圾含有极高的水分与有机物，很容易腐坏，产生恶臭。经过妥善处理和加工，可转化为新的资源，高有机物含量的特点使其经过严格处理后可作为肥料、饲料，也可产生沼气用作燃料或发电，油脂部分则可用于制备生物燃料。')
  map.set('可回收物', '根据《城市生活垃圾分类及其评价标准》行业标准以及参考德国垃圾分类法，可回收物是指适宜回收循环使用和资源利用的废物。主要包括：1、纸类：未严重玷污的文字用纸、包装用纸和其他纸制品等。如报纸、各种包装纸、办公用纸、广告纸片、纸盒、复印纸等；2、塑料：废容器塑料、包装塑料等塑料制品。比如各种塑料袋、塑料瓶、泡沫塑料、一次性塑料餐盒餐具、硬塑料等；3、金属：各种类别的废金属物品。如易拉罐、铁皮罐头盒、铅制牙膏皮等；4、玻璃：有色和无色废玻璃制品；5、织物：旧纺织衣物和纺织制品。有害垃圾是指油漆、颜料、各类清洗液、电子垃圾和电池。不可回收物更准确称为剩余垃圾指除可回收垃圾之外的垃圾，常见的有在自然条件下易分解的垃圾，如：水果皮、菜叶、剩菜剩饭、花草树枝树叶以及前五类生活垃圾中互相混合污染无法分类的垃圾（不包含有害垃圾，被污染混合的有害垃圾也应当被分类为有害垃圾）。有些地区将此类垃圾中的生物质单独分类为生物质（国内有部分城市也将此分类为湿垃圾或厨余垃圾）垃圾进行回收处理')
  map.set('有害垃圾','分类投放有害垃圾时，应注意轻放。其中：废灯管等易破损的有害垃圾应该连包装或包裹后投放；废弃药品应连包装或包裏后一并投放；杀虫剂等压力罐装容器，应排空内容物后投放；在公共场所产生有害垃圾且未发现对应收集容器时，应携带至有害垃圾投放点妥善投放。不可投放至其他垃圾桶')
  map.set('其他垃圾', '其他垃圾包括砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片、动物排泄物、一次性用品等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染。到目前为止，人类暂时还没有有效化解其他垃圾的好方法，所以要尽量少产生。')

  return map
}