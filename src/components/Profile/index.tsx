import React from 'react';

import { IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import * as S from './styled';
import Text from '../Text';

const Profile: React.FC = () => (
  <S.Container>
    <S.User>
      <S.TitleUser>
        <Text component="h2" modifiers={['header3', 'blue']}>
          Leonardo Souza
        </Text>
      </S.TitleUser>
      <S.DescriptionUser>
        <Text component="span" modifiers={['description', 'blue']}>
          Documentail
        </Text>
      </S.DescriptionUser>
    </S.User>

    <Avatar alt="user" style={{ marginLeft: '1rem', marginRight: '.5rem' }} />
    <IconButton type="button" style={{ padding: '0' }}>
      <ExpandMoreOutlinedIcon />
    </IconButton>
  </S.Container>
);

export default Profile;
