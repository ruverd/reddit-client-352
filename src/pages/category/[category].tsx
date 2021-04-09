import { getSession } from 'next-auth/client';

import { PostList } from '../../components/PostList';

type PostData = {
	id: number;
	thumbnail: string;
	thumbnail_height: number;
	thumbnail_width: number;
	title: string;
	post_hint: string;
	url: string;
}

interface CategoryProps {
	posts: Array<{data: PostData}>
}

export default function Category({ posts }: CategoryProps) {
	return <PostList posts={posts} />
}

export const getServerSideProps = async ({ req, res, params }) => {
  const { category } = params;

  const session = await getSession({
    req
  });

  if (!session) {
    res.statusCode = 302;
    res.setHeader('Location', `/`);

    return {props: {}}
  }

  const { data } = await fetch(`http://localhost:3000/api/categoryPosts?category=${category}`).then((res) =>
		res.json()
	);

	const posts = data.children;

	return {
		props: { posts },
	};
};
