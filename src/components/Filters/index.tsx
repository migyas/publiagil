import React from 'react';
import Text from '../Text';

import * as S from './styled';

const Filters: React.FC = () => (
  <S.Container>
    <S.Title>
      <Text component="p" size="1.4" modifiers={['header4', 'gray']}>
        filtrar por
      </Text>
    </S.Title>
    <S.List>
      <S.ListItem>
        <S.ListIcon colorBackground="#c4c4c4" />
        <S.ItemDescription>
          <Text
            component="p"
            size="1.4"
            modifiers={['black', 'bodyFilterBold']}
          >
            Todos os pedidos (32)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#EB5757" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Aguardando pagamento (6)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#F2994A" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Aguardando aprovação (2)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#F2C94C" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Encaminhado (8)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#42A5FF" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Em transporte (12)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#9294F1" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Em análise (4)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
      <S.ListItem>
        <S.ListIcon colorBackground="#09D851" />
        <S.ItemDescription>
          <Text component="p" size="1.4" modifiers={['black', 'bodyFilter']}>
            Finalizados (45)
          </Text>
        </S.ItemDescription>
      </S.ListItem>
    </S.List>
  </S.Container>
);

export default Filters;
