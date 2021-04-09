import { Box, Text } from 'grommet';
import Image from 'next/image';
import { Container } from './styles';

type PostData = {
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

interface PostProps {
	data: PostData;
	onSelectPost: (data: PostModalData) => void;
}

const PATTERN_URL = /^((http|https):\/\/)/;

export function Post({ data, onSelectPost }: PostProps) {
	const onClickPost = () => onSelectPost({
		post_hint: data.post_hint,
		url: data.url,
	});

	return (
		<Container
			background={'purple-50'}
			margin={{ left: 'xsmall', right: 'medium', top: 'xsmall', bottom: 'small' }}
			pad={'small'}
			direction="row"
			round={'small'}
			onClick={onClickPost}
			flex={"grow"}
		>
			{PATTERN_URL.test(data.thumbnail) && (
				<Box
					margin={{ right: 'small' }}
					elevation="small"
					round={'small'}
				>
					<Image
						src={data.thumbnail}
						height={data.thumbnail_height}
						width={data.thumbnail_width}
						objectFit="cover"
					/>
				</Box>
			)}
			<Box flex={'grow'} pad={{right: 'medium'}}>
				<Text size="xlarge" margin={'none'}>
					{data.title}
				</Text>
			</Box>
		</Container>
	);
}
