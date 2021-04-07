import { Box, Button, Image, Layer, Stack } from 'grommet';
import { Close } from 'grommet-icons';

export function PostModal({ data, onEsc }: { onEsc: () => void; data: any }) {
	return (
		<Layer onEsc={onEsc} onClickOutside={onEsc} style={{ maxHeight: '100vh' }}>
			<Box height={{ max: '100vh' }}>
				<Box>
					<Stack
						anchor="top-right"
						guidingChild={'first'}
						style={{ maxWidth: '100vw', maxHeight: '100vh' }}
					>
						{data.post_hint === 'link' ? (
							<iframe src={data.url} />
						) : (
							<Image
								src={data.url}
								fit="contain"
								style={{ maxWidth: '95vw', maxHeight: '95vh' }}
							/>
						)}

						<Button
							plain
							color={'white'}
							icon={
								<Box background={'white'} round={'full'} pad={'xxsmall'}>
									<Close />
								</Box>
							}
							onClick={onEsc}
						/>
					</Stack>
				</Box>
			</Box>
		</Layer>
	);
}
