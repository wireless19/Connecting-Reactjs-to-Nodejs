
//we will create a new data we want to pass to our frontend(React)

exports.usersController = function (req, res) {
    res.json({ usersList: ["user 1", "user 2", "Victor"] })
}