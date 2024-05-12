import { Schema, model } from 'mongoose';


const postSchema = new Schema({
    title: String,
    slug: String,
    published: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
});

const Post = model('Post', postSchema);
export default Post;
