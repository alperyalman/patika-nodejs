const Koa = require('koa')
const app = new Koa();

const Router = require('koa-router')
const router = new Router();

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>INDEX SAYFASI</h1>'

})

router.get('/index' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>INDEX SAYFASI</h1>'
})

router.get('/about' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>ABOUT SAYFASI</h1>'
})

router.get('/contact' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>CONTACT SAYFASI</h1>'
})

// router.get('*' , ctx =>{
//     ctx.status = 404
//     ctx.body = '<h1>404 SAYFA BULANAMADI!</h1>'
// })

app.use(router.routes())

const port = 3000

app.listen(port, () =>{
    console.log(`Server ${port} portunda calismaya basladi...`)
})