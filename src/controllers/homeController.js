import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    // simple query
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    res.render('homePage', {
        dataUser: rows,
    })
}

let createUser = (req, res) => {
    res.render('createUser')
}

let getDetail = async (req, res) => {
    let userID = req.params.userID
    const [user] = await pool.execute(`SELECT * FROM users where _id = ${userID}`)
    res.json(user)
}

let createNewUser = async(req, res) => {
    let {firstName, lastName, email, address} = req.body
    await pool.execute(`insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)`,[firstName, lastName, email, address])
    return res.redirect('/')
}
module.exports = {
    getHomePage,
    createUser,
    getDetail,
    createNewUser,
}