import { AppProps } from 'next/app';
import { Grommet } from 'grommet';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { SubscriptionProvider } from '../contexts/SubscriptionContext';
import LayoutWrapper from "../layouts";
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps){
	return (
		<NextAuthProvider session={pageProps.session}>
			<Grommet theme={theme} full>
				<SubscriptionProvider>
					<LayoutWrapper>
						<Component {...pageProps} />
					</LayoutWrapper>
				</SubscriptionProvider>
			</Grommet>
		</NextAuthProvider>
	)
}
