import styled from 'styled-components';

export const FooterBase = styled.footer`
  background-color: var(--black);
  border-top: 2px solid var(--primary);
  padding: 32px 16px;
  color: var(--white);
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
