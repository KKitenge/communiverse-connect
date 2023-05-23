const { Schema, Types } = require('mongoose'); //Schema only

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.ObjectId,
            default: () => new Schema.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;