const { Pool } = require('pg');
//트라이 캐치 해야됨 나중에
const config = {
  user: 'postgres',
  password:'038100',
  host:  '192.168.219.124',
  port: 5432,
  database:'postgres',
};
let pool = new Pool(config);

const postgres = async (sql)=>{
  let client = await pool.connect();
  let result = await client.query(sql);
  client.release();
  return result.rows;
}

module.exports= postgres;
