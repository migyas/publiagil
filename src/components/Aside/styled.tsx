import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: absolute;
  width: 7rem;
  height: 108rem;
  background: #ffffff;

  ${media.lessThan('small')`
    width: 5rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 30rem;
  padding: 3.2rem 1.6rem;

  ${media.lessThan('small')`
    padding: 2.5rem .5rem;
  `}
`;
export const Image = styled.img``;

export const DivImg = styled.div`
  position: relative;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(45, 156, 219, 0.16);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1px);
    background-color: rgb(45, 156, 219, 0.3);
  }
`;
