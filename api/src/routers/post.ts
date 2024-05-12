import { Router, Request, Response } from 'express';
import Post from '../models/post';

const route = Router()

route.post('/', async (req: Request, res: Response) => {
    const post = await Post.create({
        title: 'test',
        content: 'this is a test post. i will be deleted.',
        slug: 'test-post-delete',
        tags: ['test'],
        published: false,
      })
      .then(() => {})
      .catch(e => {
        console.error('Failed to ')
      })
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