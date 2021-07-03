const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    id: Number,
    title : String,
    points : Number,
    user : String,
    time: Number,
    time_ago: String,
    comments_count : Number,
    type : String,
    url: String,
    domain : String,
})

const Posts = mongoose.model("Posts", postSchema ) ;
module.exports = Posts ;