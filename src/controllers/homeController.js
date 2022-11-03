
let getHomePage = (req, res) => {
    res.render('homePage.ejs')
}

let getInfor = (req, res) => {
    res.send('HAHA')
}

module.exports = {
    getHomePage,
    getInfor,
}