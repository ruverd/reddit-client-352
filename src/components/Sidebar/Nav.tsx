import { useState } from 'react';
import { Box, Nav as GrommetNav } from 'grommet';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { categories } from '../../routes';
import { NavLink } from './NavLink';

export function Nav(){
  const [session] = useSession();
  const { asPath } = useRouter();
  
  return (
    <Box fill direction="row" margin={{top: 'large'}}>
      <GrommetNav background="purple-900" width="100%">
        {categories.map(category => (
          (
            (category.isPrivited && session) ||
            (!category.isPrivited)
          ) &&
          <NavLink
            key={category.label}
            label={category.label}
            active={category.href === asPath}
            href={category.href}
          />
        ))}
      </GrommetNav>
    </Box>
  );
}