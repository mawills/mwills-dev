import { Router, Request, Response } from 'express';
import Post from '../models/post';

const route = Router()

route.post('/', async (req: Request, res: Response) => {
    const post = await Post.create({
        title: 'test3',
        content: 'this is a test post. i will be deleted.',
        slug: 'test-post-delete',
        tags: ['test'],
        published: false,
      })
      .then(result => {
        console.log("post created", result)
      })
      .catch(e => {
        console.error('Failed to create post', e);
      })
    
      res.status(201).send(post);
})

route.get('/', async (req: Request, res: Response) => {
    try {
        const posts = await Post.find({})
        res.send(posts);
    } catch (e) {
        res.status(500).send(e);
    }
});

// update

// delete

export default route;