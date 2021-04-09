import { Box } from 'grommet';
import Image from 'next/image';

export function Header(){
  return (
    <Box align="center" pad={{ vertical: 'medium' }} >
      <Image src="/Logo.svg" layout='fixed' width="140" height="50" /> 
    </Box>    
  );
}