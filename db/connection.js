import pg from 'pg';
import conf from './conf.js'

const { Pool, Client } = pg;

const pool = new Pool(conf); //for multiple connection to db

pool.query('SELECT NOW()', (err, res) => {
    pool.end()
})

const client = new Client(conf) //for only one connetcion to db
await client.connect()

const res = await client.query('SELECT NOW()')
console.log(res.rows[0].now)
await client.end()