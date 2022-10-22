### nodejs_blog
1. npm init	
2. npm install --save-dev nodemon 	(auto load)
3. npm install morgan --save-dev	(logger)
4. npm install express-handlebars	(template engine, de  viet code ngan gon hon)
5. npm install node-sass --save-dev  (	dùng để css file. Mình sẽ tạo app.scss trong src/resource sau đó link nó sang public/css)
    - edit in package.json -> scripts": {"watch" : "node-sass src/resource/scss/app.scss src/public/css/app.css",
    - npm run watch
