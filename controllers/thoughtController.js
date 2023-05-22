const { Thought, User } = require('../models');

module.exports = {
    //Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((though) => res.json(though))
            .catch((err) => res.status(500).json(err));
    },
    //Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtID })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    }
}

//get all thoughts - X
//get a single thought - X
//create a thought -
//update thought -