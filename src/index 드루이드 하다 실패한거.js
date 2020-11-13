const Koa = require('koa');
const Router = require('koa-router');
const app =new Koa();
const router = new Router();
//const bodyParser = require('koa-bodyparser');
const port = 5500;

let res;
var Druid = require('druid-query')
  , Client = Druid.Client
  , Query = Druid.Query
  , client = new Client('http://192.168.219.141:8082');

var q1 = client.groupBy()
  q1.dataSource('wikipedia')
  q1.granularity('all')
  q1
    .dimensions([])
    .aggregation('count', 'rows')
    .aggregation('doubleSum', 'e', 'events')
    .interval(Date.UTC(1000, 9, 1), Date.UTC(2020, 0, 1))

q1.exec(function(err, result) {
  if (err) {
    // handle error...
    console.log(err);
  }
  else {
    res = result;
    console.log(result);
  }
})

var q2 = new Druid.TimeBoundaryQuery()
q2.dataSource('wikipedia')
client.exec(q2, function(err, result) {
  // handle results
    //  console.log(err);

})


router.get('/', (ctx)=>{
  ctx.body=res;
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(port, ()=>{
  console.log(port);
});
