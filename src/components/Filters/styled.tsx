import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const Container = styled(Card)`
  max-width: 88rem;
  width: 30rem;
  height: 30rem;
  background-color: #ffffff;
  padding: 2.4rem 2.5rem 0 2.5rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
  border-radius: 4px;

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }

  @media (max-width: 418px) {
    padding: 2rem;
  }
  @media (max-width: 281px) {
    padding: 0.75rem;
    height: 25rem;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: normal;
  color: #bdbdbd;
  margin-bottom: 1.6rem;
`;

export const List = styled.ul`
  list-style: none;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 1.6rem;
  display: flex;

  @media (max-width: 1100px) {
    margin-right: 2rem;
  }
`;

export const ListIcon = styled.li`
  width: 1.6rem;
  height: 1.6rem;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-right: 1.6rem;

  @media (max-width: 350px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ItemDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 281px) {
    font-size: 1.2rem;
  }
`;
