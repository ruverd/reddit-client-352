import { Text } from 'grommet';
import { useSession } from 'next-auth/client';

import { SignInButton } from '../SignInButton';
import { Footer } from './Footer';
import { Header } from './Header';
import { Nav } from './Nav';

import { useSubscription } from '../../hooks/useSubscription';

import { Container } from './styles';

export function Sidebar(){
  const { plan } = useSubscription();
  const [session] = useSession();

  return (
    <Container
      responsive={false}
      background="purple-900"
      header={<Header />}
      footer={<Footer />}
      pad={{ vertical: 'small' }}
    >
      <SignInButton />
      {session && <Text textAlign="center" size="small" margin="xsmall">Subscription Plan: {plan}</Text>}
      <Nav />

    </Container>
  );
}