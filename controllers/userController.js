const { User, Thought } = require('../models');

module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
            .populate('thoughts')
            .populate('friends')
            .then(async (users) => {
                const userObj = {
                    users
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'There is no student with that ID' })
                    : res.json({
                        user
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //Create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no User with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Remove a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no User with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'The User and Thought are deleted' }))
            .catch((err) => res.status(500).json(err));
    },
    //Add a friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no User with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Remove a friend
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendsId: req.params.friendID } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no User with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};

//get all users - X
//get single user - X
//create a user - X
//update a user - X
//remove a user - X
//add a friend - X
//remove a friend - X