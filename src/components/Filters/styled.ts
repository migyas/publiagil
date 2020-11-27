import styled, { css } from 'styled-components';
import { Card } from '@material-ui/core';

interface PropsIcon {
  colorBackground?: string;
}

export const Container = styled(Card)`
  max-width: 88rem;
  width: 33rem;
  height: 30rem;
  background-color: #ffffff;
  padding: 2.5rem 0;
  padding-left: 2rem;
  padding-right: 2.7rem;
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

export const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const List = styled.ul`
  list-style: none;
  width: 29rem;

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
    width: 18rem;
  }
`;

export const ListIcon = styled.div<PropsIcon>`

  ${({ colorBackground }) => (colorBackground
    ? css`
          background-color: ${colorBackground};
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          margin-right: 1.6rem;

        `
    : css`
          background-color: #c4c4c4
        `)};

  border-radius: 50%;

  @media (max-width: 350px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ItemDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
`;
