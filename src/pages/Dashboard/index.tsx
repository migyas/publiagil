import React from 'react';

import Aside from '../../components/Aside';
import Grid from '../../components/Grid';
import SearchField from '../../components/SearchField';
import Profile from '../../components/Profile';
import Filters from '../../components/Filters';
import ResultsFilter from '../../components/ResultsFilter';

import * as S from './styled';
import Text from '../../components/Text';

const Dashboard: React.FC = () => (
  <>
    <Aside />
    <Grid>
      <S.Header>
        <SearchField />
        <Profile />
      </S.Header>
      <S.MainTitle>
        <Text component="h1" modifiers={['header1', 'black']}>Dashboard</Text>
      </S.MainTitle>
      <S.Content>
        <Filters />
        <ResultsFilter />
      </S.Content>
    </Grid>
  </>
);

export default Dashboard;
