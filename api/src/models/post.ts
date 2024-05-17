import { Schema, model } from 'mongoose';


const postSchema = new Schema({
    title: String,
    slug: String,
    published: String,
    content: String,
    tags: [String]
}, { timestamps: true });

const Post = model('Post', postSchema);
export default Post;
