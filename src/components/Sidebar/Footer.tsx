import { FooterContainer } from './styles';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer(){
  return (
    <FooterContainer>
      <span>© {CURRENT_YEAR} Three Five Two</span>
    </FooterContainer>
  );
}