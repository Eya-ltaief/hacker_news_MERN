// requiring postMsg model
const Posts = require ('../models/posts')
// requiring express
const express =require ('express');
// requiring mongoose
const mongoose =require ('mongoose');
// requiring express router
const router = express.Router()

// add a post
exports.addPost = async(req, res)=>{
    // assigning the body to the post
    const data = req.body
    // creating a new post
    const newPost = new Posts(data)
   try{
    // saving the post created
    await newPost.save()
    // ssinging a successful status to it
    res.status(200).json(newPost)
   }catch(error){
    res.status(400).json({msg : error.msg})
   }
}
//getting posts
exports.getPost= async(req, res) => {
    await Posts.find()
        .then((data) => {res.json(data)})
        .catch((error) => {
            res.status(400).json({msg : error.msg})
        });
};
// deleting post
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Posts.findByIdAndRemove(id)
        .then(()=>res.json("todo deleted !"))
        .catch(err=>res.status(400).json("error:"+err))

}