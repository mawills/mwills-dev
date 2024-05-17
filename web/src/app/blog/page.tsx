import { Post } from '@/interfaces/post';

const { API_BASE_URL } = process.env;

async function getPosts() {
  const res = await fetch(`${API_BASE_URL}/post`);

  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  const posts: Post[] = await res.json()

  return posts;
}

export default async function Page() {
  const posts: Post[] = await getPosts();

  return (
    <div className="
        p-6
        mx-auto
        page
        max-w-6xl
        print:max-w-letter
        md:max-w-letter md:h-letter
        xsm:p-8
        sm:p-9
        md:p-16
        bg-white
        text-sm
      "
    >
      <ul>
        {posts.map(post => 
          <li key={post._id}>
              <a href={"/post/" + post.slug} target="_blank" rel="noreferrer noopener">
                {new Date(post.createdAt).toLocaleString()}
                <span> - </span>
                {post.title}
              </a>
          </li>
        )}
      </ul>
    </div>
  );
}
