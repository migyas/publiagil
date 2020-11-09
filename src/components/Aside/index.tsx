import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import * as S from './styled';
import logo from '../../assets/main-logo.svg';
import grid from '../../assets/grid-icon.svg';

const Aside: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Image src={logo} alt="logo" />
      <S.DivImg>
        <S.Image src={grid} alt="grid" />
      </S.DivImg>
      <SettingsIcon
        style={{ fontSize: '2.2rem', color: '#E0E0E0', cursor: 'pointer' }}
      />
      <S.Plus>
        <AddCircleRoundedIcon />
      </S.Plus>
    </S.Content>
  </S.Container>
);

export default Aside;
