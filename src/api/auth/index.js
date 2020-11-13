const Router = require('koa-router');
const auth = new Router(); //라우터 설정
const {login } = require('./auth.ctrl');

auth.get('/login',  login);  //관제 or 모니터링 // 로그인

module.exports = auth;
