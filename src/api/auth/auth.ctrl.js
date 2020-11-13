// const {} = require('../../models/auth');
// const bcrypt = require('bcrypt');
const postgres = require('../../lib/pgConnect');

const login = async ctx => {
  // const {userlevel}  = ctx.request.body;
  let res = await postgres('select *from tb_user');
  console.log(res);
  ctx.body = 'hi';
};

module.exports = {login};
