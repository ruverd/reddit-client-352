import { Box, Sidebar, Text } from 'grommet';
import Head from 'next/head';
import { useState } from 'react';

import { Post } from '../components/Post';
import { PostModal } from '../components/PostModal';

export default function Home(props) {
	const [modelData, setModalData] = useState<object | false>(false);
	const posts = props?.posts?.data?.children as any[];
	console.log(posts);
	function dismissModal() {
		setModalData(false);
	}

	return (
		<>
			<Head>
				<title>Reddit Client</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{modelData && <PostModal onEsc={dismissModal} data={modelData} />}
			<Box
				direction="row"
				height={{ max: '100vh' }}
				gap="medium"
				background={'brand'}
			>
				<Sidebar
					responsive={false}
					background="neutral-2"
					header={<h1>Reddit Client</h1>}
					footer={<Text>copyright @1337</Text>}
					pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
				>
					{/*<MainNavigation />*/}
				</Sidebar>
				<Box align="center" overflow={'scroll'} fill={'horizontal'}>
					<Box align="center" pad={{ vertical: 'large' }}>
						<Box direction="column" gap="small">
							{posts ? (
								posts.map((post) => (
									<Post
										onSelectPost={setModalData}
										key={post.data.id}
										data={post.data}
									/>
								))
							) : (
								<em>No Posts Found.</em>
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export async function getServerSideProps() {
	const posts = await fetch('http://localhost:3000/api/posts').then((res) =>
		res.json()
	);
	return {
		props: { posts },
	};
}
