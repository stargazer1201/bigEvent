const cors = require('cors')
const express = require('express');
const app = express();
const path = require('path');
app.listen(3007, console.log('服务器启动了'));

// ---------------------------- 配置应用级别中间件 ------------------------
app.use(cors());

app.use(express.urlencoded({ extended: false }))

// ---------------------- 加载路由模块 --------------------
app.use('/api', require(path.join(__dirname, 'routers', 'login')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'user')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'category')))
app.use('/my', require(path.join(__dirname, 'routers', 'article')))