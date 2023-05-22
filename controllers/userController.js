const { User } = require('../models');

module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users
                };
                return res.json(userObj);
            })
            .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    //Get a single user
    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) =>
        !user
            ? res.status(404).json({ message: 'There is no student with that ID'})
            : res.json({
                user
            })            
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}

//get all users - X
//get single user - X
//create a user
//update a user
//remove a user
//add a friend
//remove a friend