import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'luisg',
    host: 'localhost',
    database: 'api',
    password: 'admin1234',
    port: 5432
})

export async function getUsers(req, res) {
    try {
        const users = await pool.query('SELECT * FROM users ORDER BY id ASC')
        res.status(200).send({
            users:users.rows
        })
    } catch(err) {
        throw err
    }
}

export async function createUser(req, res) {
    try {
        const {name, email} = req.body
        const result = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`, [name, email])
        res.status(201).send({
            message: `User added with ID: ${result.rows[0].id}`
        })
    } catch (err) {
        throw err
    }
}