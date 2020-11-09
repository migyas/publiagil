import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: fixed;
  width: 7rem;
  height: 100vh;
  background: #ffffff;

  ${media.lessThan('small')`
    width: 6rem;
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

  img {
    position: absolute;
    top: 1.1rem;
    left: 1.125rem;
  }
`;

export const Plus = styled.div`
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1px);
  }

  svg {
    color: #2f80ed;
    font-size: 5rem;
    transition: all 0.4s;

    &:hover {
      color: #4d94f1;
    }
  }
`;
