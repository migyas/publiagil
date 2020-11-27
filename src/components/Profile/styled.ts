import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 23rem;
  width: 100%;

  @media (max-width: 350px) {
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  color: #2f80ed;
`;

export const TitleUser = styled.div`
  @media (max-width: 795px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionUser = styled.div``;
