import Link from 'next/link';
import { Box, Button, Text, ButtonProps } from 'grommet';

interface NavLinkProps extends ButtonProps {
  label: string;
}

export function NavLink({ label, ...props }: NavLinkProps){
  return (
    <Link href={props.href} passHref>
      <Button plain {...props}>
      {({ hover }) => (
        <Box
          align="center"
          background={hover ? 'purple-600' : undefined}
          pad={{ horizontal: 'large', vertical: 'medium' }}
        >
          <Text>{label}</Text>
        </Box>
      )}
    </Button>
  </Link>
  );
}