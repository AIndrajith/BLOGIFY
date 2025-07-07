const mongoose = require("mongoose");

// schema

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String, 
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, // in the mongoose this stores as an ID
            required: true,
            ref: "User",
        },
        postId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
                required: true,
        },
    },
    {
        timestamps: true,
    }
);

// compile schema to model

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;