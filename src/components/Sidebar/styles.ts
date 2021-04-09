import { Sidebar as GrommetSidebar } from 'grommet';
import styled from 'styled-components';

export const Container = styled(GrommetSidebar)`
  width: 100%;
  max-width: 300px;
  height: 100vh;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    font-size: 1rem;
  }  
`;
