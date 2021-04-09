import { PostList } from '../components/PostList';

type PostData = {
	id: number;
	thumbnail: string;
	thumbnail_height: number;
	thumbnail_width: number;
	title: string;
	post_hint: string;
	url: string;
}

interface HomeProps {
	posts: Array<{data: PostData}>
}

export default function Home({ posts }: HomeProps) {
	return <PostList posts={posts} />
}

export async function getServerSideProps() {
	const { data } = await fetch('http://localhost:3000/api/posts').then((res) =>
		res.json()
	);

	const posts = data.children;

	return {
		props: { posts },
	};
}
