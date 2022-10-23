const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const { extname } = require('path');
const exp = require('constants');
const { execPath } = require('process');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true})); //xử lý data gửi từ form dạng post, và có thể logger bằng req.body.
app.use(express.json());  //form gửi dưới dạng post/get json
//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: '.hbs'     //defautl đuôi nó là handlebars, nhưng mình đặt "hbs" cho nó ngắn gọn
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Rroute
app.get('/', (req, res) => {   //this is around function .. like function(req, res) return...
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('views');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('search');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})