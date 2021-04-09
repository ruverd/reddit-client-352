import { Box } from 'grommet';
import styled from 'styled-components';

export const Container = styled(Box)`
  transition: filter 0.2s;

  &:hover {
    filter: brightness(.95);
  }
`;
