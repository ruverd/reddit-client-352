import { Box } from 'grommet';
import { useState } from 'react';

import { Post } from '../Post';
import { PostModal } from '../PostModal';

type PostData = {
	id: number;
	thumbnail: string;
	thumbnail_height: number;
	thumbnail_width: number;
	title: string;
	post_hint: string;
	url: string;
}

type PostModalData = {
	post_hint: string;
	url: string;
}

interface PostListProps {
	posts: Array<{data: PostData}>
}

export function PostList({ posts }: PostListProps){
  const [modelData, setModalData] = useState<PostModalData | false>(false);
	
	function dismissModal() {
		setModalData(false);
	}

  return (
    <>
      { modelData && <PostModal onEsc={dismissModal} data={modelData} />}
      
      <Box align="center" overflow={'scroll'} fill={'horizontal'}>
        <Box align="center" pad={{ vertical: 'medium' }}>
          <Box direction="column" gap="small">
            {posts ? (
              posts.map((post) => {
                return (
                  <Post
                    onSelectPost={setModalData}
                    key={post.data.id}
                    data={post.data}
                  />
                );
              })
            ) : (
              <em>No Posts Found.</em>
            )}
          </Box>
        </Box>
      </Box>   
    </>
  )
}