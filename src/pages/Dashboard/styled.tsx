import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const MainTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 3.5rem;
  margin-bottom: 2.4rem;
`;

export const Header = styled.div`
  display: flex;
  padding-top: 2.4rem;
  justify-content: space-between;
  align-items: center;
`;
