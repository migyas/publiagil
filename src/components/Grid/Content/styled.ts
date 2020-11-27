import styled from 'styled-components';

export const Content = styled.div`
  max-width: 125rem;
  padding-left: 11rem;
  margin: 0 auto;
  height: 100vh;

  @media (max-width: 1100px) {
    padding-right: 1rem;
  }

  @media (max-width: 875px) {
    padding-left: 8rem;
  }

  @media (max-width: 510px) {
    padding-right: 1rem;
    padding-left: 7.5rem;
  }
`;
