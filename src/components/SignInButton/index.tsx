import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Github, FormClose } from 'grommet-icons';

import { Button } from './styles';

export function SignInButton() {
  const [session] = useSession();
  const router = useRouter()

  return session ? (
    <Button
      type="button"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <Github />
      {session.user.name}
      <FormClose/>
    </Button>
  ) : (
    

    <Button
      type="button"
      onClick={() => signIn('github')}
    >
      <Github />
      Sign in with Github
    </Button>
  );
}
