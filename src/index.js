const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const { extname } = require('path');
const exp = require('constants');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})