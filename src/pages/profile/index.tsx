import { Avatar, Box, List, Select, Text } from 'grommet';
import { getSession } from 'next-auth/client';

import { useSubscription } from '../../hooks/useSubscription';

type UserData = {
  name: string;
  email: string;
  image: string;
}

interface ProfileProps {
  user: UserData;
}

export default function Profile({ user }: ProfileProps) {
  const { plan, setPlan } = useSubscription();

	return (
    <>
      <Box
        background={'purple-50'}
        margin={{ left: 'xsmall', right: 'medium', top: 'medium', bottom: 'medium' }}
        pad={'large'}
        direction="column"
        round={'small'}
        align="center"
        flex={"grow"}
      >
        <Avatar src={user.image} size="4xl" />
        <List
          margin="medium"
          primaryKey="title"
          secondaryKey="value"
          data={[
            { title: 'Name', value: user.name },
            { title: 'Email', value: user.email },
            { title: 'Plan', value: 'Basic' }
          ]}
        />
        <Text margin={{ top: 'large', bottom: 'xsmall'}}>Subscription plan:</Text>
        <Select
          margin="medium"
          options={['Basic', 'Gold']}
          value={plan}
          onChange={({ option }) => setPlan(option)}
        />
      </Box>
      
    </>
  )
}

export async function getServerSideProps({ req, res, params }) {
  const session = await getSession({
    req
  });

  if (!session) {
    res.statusCode = 302;
    res.setHeader('Location', `/`);

    return {props: {}}
  }

	return {
		props: { user: {...session.user} },
	};
}
