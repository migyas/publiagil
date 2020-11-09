import React from 'react';

import { IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import * as S from './styled';

const Profile: React.FC = () => (
  <S.Container>
    <S.User>
      <S.TitleUser>Leonardo Souza</S.TitleUser>
      <S.DescriptionUser>Documentail</S.DescriptionUser>
    </S.User>

    <Avatar alt="user" style={{ marginLeft: '1rem' }} />
    <IconButton type="button">
      <ExpandMoreOutlinedIcon />
    </IconButton>
  </S.Container>
);

export default Profile;
