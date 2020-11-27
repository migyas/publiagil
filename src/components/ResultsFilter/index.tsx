import React from 'react';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import iconImage from '../../assets/icon-image.svg';

import * as S from './styled';
import Text from '../Text';

interface PropsResultsFilter {
  // tagType?: boolean;
  tagType?: string;
}

const ResultsFilter: React.FC<PropsResultsFilter> = () => (
  <S.Container>
    <S.Title>
      <Text component="h2" modifiers={['header2']}>
        Todos os pedidos
      </Text>
    </S.Title>
    <S.List>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>
        <S.FilterTag>
          <Text component="div" modifiers={['awaitingAppointment']}>
            Aguardando agendamento
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>
        <S.FilterTag>
          <Text component="div" modifiers={['awaitingApproval']}>
            Aguardando aprovação
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>
        <S.FilterTag>
          <Text component="div" modifiers={['forwarded']}>
            Encaminhado
          </Text>
        </S.FilterTag>

        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['onCarriage']}>
            Em transporte
          </Text>
        </S.FilterTag>

        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>
        <S.FilterTag>
          <Text component="div" modifiers={['inAnalysis']}>
            Em análise
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['forwarded']}>
            Encaminhado
          </Text>
        </S.FilterTag>

        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['awaitingPayment']}>
            Aguardando pagamento
          </Text>
        </S.FilterTag>

        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['finished']}>
            Finalizado
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['finished']}>
            Finalizado
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['finished']}>
            Finalizado
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['finished']}>
            Finalizado
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
      <S.ListItem>
        <S.Image src={iconImage} alt="download" />
        <S.ID>#16835</S.ID>
        <S.NameDate>
          <S.Name>Maria Luciana</S.Name>
          <S.Date>10/10/2020 18:30</S.Date>
        </S.NameDate>
        <S.Value>R$ 5310,88</S.Value>

        <S.FilterTag>
          <Text component="div" modifiers={['finished']}>
            Finalizado
          </Text>
        </S.FilterTag>
        <S.OptionsRequest>
          <S.LinkItem to="/home">Ver pedido</S.LinkItem>
          <S.Options>
            <CloudDownloadOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: '.8rem', cursor: 'pointer' }}
            />
          </S.Options>
        </S.OptionsRequest>
      </S.ListItem>
    </S.List>
    <S.Pagination>
      <S.ShowNumberPg>Mostrando 12 de 120</S.ShowNumberPg>
      <S.NumberPgs>
        <S.NumberPgItem
          style={{
            fontWeight: 'bold',
          }}
        >
          1
        </S.NumberPgItem>
        <S.NumberPgItem>2</S.NumberPgItem>
        <S.NumberPgItem>3</S.NumberPgItem>
        <S.NumberPgItem>4</S.NumberPgItem>
        <S.NumberPgItem>5</S.NumberPgItem>
      </S.NumberPgs>
    </S.Pagination>
  </S.Container>
);

export default ResultsFilter;
