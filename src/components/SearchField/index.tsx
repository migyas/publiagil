import React from 'react';
import { Search } from '@material-ui/icons';

import * as S from './styled';

const SearchField: React.FC = () => (
  <S.Container>
    <S.Input type="text" placeholder="Pesquise pedidos por código ou nome..." />
    <Search
      style={{
        position: 'absolute',
        top: '1rem',
        left: '1.8rem',
        color: '#BDBDBD',
        fontSize: '1.8rem',
      }}
    />

  </S.Container>
);

export default SearchField;
