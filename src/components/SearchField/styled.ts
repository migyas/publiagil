import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 3rem;
  max-width: 50rem;
  width: 100%;
  margin-right: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;

  padding: 1.3rem 2rem 1.5rem 4rem;
  background-color: #f2f2f2;
  border: none;
  border-radius: 25px;
  max-height: 4rem;

  &::placeholder {
    color: #a7a7a7;
  }
`;
