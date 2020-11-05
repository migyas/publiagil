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
        <S.Image
          src={grid}
          alt="grid"
          style={{
            position: 'absolute',
            top: '1.1rem',
            left: '1.125rem',
          }}
        />
      </S.DivImg>
      <SettingsIcon style={{ fontSize: '2.2rem', color: '#E0E0E0' }} />
      <AddCircleRoundedIcon style={{ fontSize: '5rem', color: '#2F80ED' }} />
    </S.Content>
  </S.Container>
);

export default Aside;
