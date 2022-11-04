import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    // simple query
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    res.render('homePage', {
        dataUser: rows,
    })
}

let getInfor = (req, res) => {
    res.send('HAHA')
}

let getDetail = async (req, res) => {
    let userID = req.params.userID
    const [user] = await pool.execute(`SELECT * FROM users where _id = ${userID}`)
    res.json(user)
}

module.exports = {
    getHomePage,
    getInfor,
    getDetail,
}