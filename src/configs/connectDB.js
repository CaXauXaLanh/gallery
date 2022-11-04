import mysql from "mysql2/promise"

console.log('Conenct to pool...')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
})

export default pool