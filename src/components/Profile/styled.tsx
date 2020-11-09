import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23rem;
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  color: #2f80ed;
`;

export const TitleUser = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;

  @media (max-width: 795px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionUser = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
