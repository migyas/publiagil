import React from 'react';

import * as S from './styled';

const Filters: React.FC = () => (
  <S.Container>
    <S.Title>filtrar por</S.Title>
    <S.List>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription style={{ fontWeight: 'bold' }}>
          Todos os pedidos (32)
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon />
        <S.ItemDescription>Todos os pedidos (32)</S.ItemDescription>
      </S.ListItem>
    </S.List>
  </S.Container>
);

export default Filters;
