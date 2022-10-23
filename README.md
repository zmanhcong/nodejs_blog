### nodejs_blog
1. npm init	
2. npm install --save-dev nodemon 	(auto load)
3. npm install morgan --save-dev	(logger)
4. npm install express-handlebars	(template engine, de  viet code ngan gon hon)
5. npm install node-sass --save-dev  (	dùng để css file. Mình sẽ tạo app.scss trong src/resource sau đó link nó sang public/css)
    - edit in package.json -> scripts": {"watch" : "node-sass src/resource/scss/app.scss src/public/css/app.css",
    - npm run watch
6. GET/ POST
    - GET: khi gửi đi thì sẽ send dưới dạng query parameter( có tham số ở trên URL)
    - POST: khi gửi đi thì không send dưới dạng query parameter, mà chỉ có Form data, ( để tránh lộ thông tin kiểu password, name..vv.vv)
7. Install 3 thư viện
    - npm install prettier --save-dev  (format làm đẹp code)
    - npm install lint-staged --save-dev  (tạo pipeline trung gian để chạy code mỗi khi commit git)
    - npm install husky --save-dev (Chỉ cần commit code, thì code sẽ chạy cái lint--staged )
8. mongoose (https://github.com/Automattic/mongoose)
    - mô hình hóa database dưới dạng đối tượng, tăng tính chặt chễ cho mongo database
    
9. asdf
