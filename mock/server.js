const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const PORT = 9000

// 加前缀
router.prefix('/api')

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js')
router.get('/homead', (ctx, next) => {
  console.log('## 首页 —— 广告（超值特惠）')
  ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
router.get('/homelist/:city/:page', (ctx, next) => {
  console.log('##首页 —— 推荐列表（猜你喜欢）')
  // 参数
  let {city, page} = ctx.params
  console.log('当前城市：' + city)
  console.log('当前页数：' + page)
  ctx.body = homeListData
});

// 搜索结果页 - 搜索结果 - 三个参数
let searchListData = require('./search/list.js')
router.get('/search/:page/:city/:category/:keyword', (ctx, next) => {
  console.log('## 搜索结果页 - 三个参数')
  // 参数
  let {page, city, category, keyword} = ctx.params
  console.log('当前页数：' + page)
  console.log('当前城市：' + city)
  console.log('当前类别：' + category)
  console.log('关键字：' + keyword)
  if (keyword) {
    let data = searchListData.data.find(item => item.title.includes(keyword))
    ctx.body = {
      hasMore: false,
      data: [data]
    }
   }else {
    ctx.body = searchListData
  }

})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/search/:page/:city/:category', (ctx, next) => {
  console.log('## 搜索结果页 - 两个参数')
  // 参数
  let {page, city, category} = ctx.params
  console.log('当前页数：' + page)
  console.log('当前城市：' + city)
  console.log('当前类别：' + category)

  ctx.body = searchListData
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/detail/info/:id', async (ctx, next) => {
  console.log('## 详情页 - 商户信息')

  const params = ctx.params
  const id = params.id

  console.log('商户id: ' + id)
  // https://github.com/koajs/koa/issues/734
  // 模拟加载中
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  })
  await next()
  ctx.body = detailInfo
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/detail/comment/:page/:id', (ctx, next) => {
  console.log('## 详情页 - 用户点评')

  let {page, id} = ctx.params
  console.log('商户id: ' + id)
  console.log('当前页数: ' + page)

  ctx.body = detailComment
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/orderlist/:username', (ctx, next) => {
  console.log('## 订单列表')
  const username = ctx.params.username
  console.log('用户名：' + username)

  ctx.body = orderList
})

// 提交评论
router.post('/submitComment', (ctx, next) => {
  console.log('## 提交评论')
  // 获取参数
  ctx.body = {
      errno: 0,
      msg: 'ok'
  }
})

app.use(router.routes())
   .use(router.allowedMethods())
app.listen(PORT)
console.log(`backend server is started at port ${PORT}`)

app.on('error', err => {
  console.error('server error', err)
})
