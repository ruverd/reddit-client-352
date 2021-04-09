import { Box, Button, Image, Layer, Stack } from 'grommet';
import { Close } from 'grommet-icons';

type PostModalData = {
	post_hint: string;
	url: string;
}

interface PostModalProps {
	data?: PostModalData;
	onEsc: () => void;
}

export function PostModal({ data, onEsc }: PostModalProps) {
  const MODAL_WIDTH = window.innerWidth - (window.innerWidth / 4);
  const MODAL_HEIGHT = window.innerHeight - (window.innerHeight / 4);

  console.log(data.post_hint, data.url)
  
	return (
		<Layer onEsc={onEsc} onClickOutside={onEsc} style={{ maxHeight: '100vh' }}>
			<Box height={{ max: '100vh' }}>
				<Box>
					<Stack
						anchor="top-right"
						guidingChild={'first'}
						style={{ maxWidth: '100vw', maxHeight: '100vh' }}
					>
						{data.post_hint === 'image' ? (
							<Image
                src={data.url}
                fit="contain"
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />
              
						) : (
              <iframe width={MODAL_WIDTH} height={MODAL_HEIGHT}  src={data.url} />
						)}

						<Button
							plain
							color={'white'}
              margin={'small'}
							icon={
								<Box background={'purple-600'} round={'full'} pad="xsmall">
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
