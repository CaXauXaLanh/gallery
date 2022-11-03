import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    // simple query
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log(">>>check mysql...")
            data = results.map((row) => { return row })
            res.render('homePage.ejs', {
                dataUser: data,
            })
        }
    );
}

let getInfor = (req, res) => {
    res.send('HAHA')
}

module.exports = {
    getHomePage,
    getInfor,
}