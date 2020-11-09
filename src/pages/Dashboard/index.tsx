import React from 'react';

import Aside from '../../components/Aside';
import Grid from '../../components/Grid';
import SearchField from '../../components/SearchField';
import Profile from '../../components/Profile';
import Filters from '../../components/Filters';
import ResultsFilter from '../../components/ResultsFilter';

import * as S from './styled';

const Dashboard: React.FC = () => (
  <>
    <Aside />
    <Grid>
      <S.Container>
        <S.Header>
          <SearchField />
          <Profile />
        </S.Header>
        <S.MainTitle>Dashboard</S.MainTitle>
        <S.Content>
          <Filters />
          <ResultsFilter />
        </S.Content>
      </S.Container>
    </Grid>
  </>
);

export default Dashboard;
