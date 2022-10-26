const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
// const { extname } = require('path');
// const exp = require('constants');
// const { execPath } = require('process');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //xử lý data gửi từ form dạng post, và có thể logger bằng req.body.
app.use(express.json()); //form gửi dưới dạng post/get json
//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Rroute init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
