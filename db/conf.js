import "dotenv/config.js";

const conf = {
host:process.env.DBHOST,
user:process.env.DBUSER,
database:process.env.DBUSER,
password:process.env.DBPASSWORD,
port:process.env.DBPORT,
}

export default conf;