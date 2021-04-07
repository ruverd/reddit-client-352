import { Box, Heading } from 'grommet';
import Image from 'next/image';

export function Post({ data, onSelectPost }) {
	const onClickPost = () => onSelectPost(data);
	console.log(data)
	return (
		<Box
			background={'light-1'}
			margin={'xsmall'}
			pad={'small'}
			direction="row"
			round={'small'}
			onClick={onClickPost}
			flex={"grow"}
		>
			{data.thumbnail !== 'self' && (
				<Box
					margin={{ right: 'medium' }}
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
			<Box flex={'grow'}>
				<Heading size="small" margin={'none'}>
					{data.title}
				</Heading>
			</Box>
		</Box>
	);
}
