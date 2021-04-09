import styled from 'styled-components';

export const Button = styled.button`
  height: 4rem;
  border-radius: 3rem;
  background: #7D4CDB;
  border: 0;
  padding: 0 1rem;
  margin: 0 2rem;
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  font-weight: bold;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  svg:first-child {
    margin-right: 0.5rem;
  }

  svg:nth-child(2) {
    margin-left: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;