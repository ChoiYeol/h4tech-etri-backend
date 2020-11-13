const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app =new Koa();
const router = new Router();
const port = 5050;


const api = require('./api');
router.use('/api', api.routes()); //api 라우터 적용

router.get('/', (ctx)=>{
  ctx.body='ㅁㄴㅇㄹ';
});


app.use(router.routes()).use(router.allowedMethods());
app.use(bodyParser());

app.listen(port, ()=>{
  console.log(port);
});
