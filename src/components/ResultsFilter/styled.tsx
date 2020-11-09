import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Container = styled(Card)`
  max-width: 92rem;
  width: 100%;
  max-height: 80rem;
  height: 100%;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
  padding-top: 3.2rem;
  padding-left: 4rem;
  margin-bottom: 2.8rem;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const List = styled.ul`
  width: 100%;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  display: flex;
  width: 82rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 7rem;
  padding-right: 6.2rem;
  margin-bottom: 2.7rem;
  flex-wrap: nowrap;
`;

export const Image = styled.img``;

export const ID = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const NameDate = styled.div``;

export const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.2rem;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;

export const Value = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: #000000;
`;

export const FilterTag = styled.div`
  background-color: rgb(235, 87, 87, 0.37);
  padding: 0.5rem 1.5rem;
  border-radius: 16px;
  font-size: 1rem;
  color: #eb5757;
`;

export const OptionsRequest = styled.div`
  display: flex;
`;

export const Options = styled.div`
  display: flex;
`;

export const LinkItem = styled(Link)`
  margin-right: 1.4rem;
  font-size: 1rem;
  color: #2d9cdb;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 3rem;

  @media (max-width: 727px) {
    margin-right: 2rem;
    justify-content: center;
    margin: 0 auto !important;
  }
`;

export const ShowNumberPg = styled.div`
  padding-top: 0.5rem;
  padding-left: 4rem;
  color: #a7a7a7;
  font-size: 1.2rem;

  @media (max-width: 728px) {
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
`;

export const NumberPgs = styled.div`
  padding-right: 8rem;
  display: flex;

  @media (max-width: 727px) {
    margin: 0 auto !important;
    padding: 0 !important;
  }
`;

export const NumberPgItem = styled.div`
  font-size: 1.4rem;
  background-color: #e0e0e0;
  padding: 0.35rem 1rem;
  border-radius: 2px;
  margin-right: 0.8rem;
  cursor: pointer;
`;
