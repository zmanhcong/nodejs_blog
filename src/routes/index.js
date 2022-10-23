const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/news', (req, res) => {
    //     res.render('views'); 
    // })
  
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {   //this is around function .. like function(req, res) return...
    //     res.render('home');
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
}
module.exports = route;