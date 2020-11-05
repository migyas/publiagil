import React from 'react';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { Search } from '@material-ui/icons';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import Aside from '../../components/Aside';
import Grid from '../../components/Grid';
import iconImage from '../../assets/icon-image.svg';

import * as S from './styled';

const Dashboard: React.FC = () => (
  <>
    <Aside />
    <Grid>
      <S.Container>
        <S.Header>
          <Paper
            component="form"
            style={{
              width: '55rem',
              backgroundColor: '#F2F2F2',
              borderRadius: '25px',
              maxHeight: '4rem',
              marginBottom: '3.5rem',
            }}
          >
            <IconButton type="button">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Pesquise pedidos por código ou nome..."
              style={{
                width: '48rem',
                color: '#A7A7A7',
                fontSize: '1.2rem',
              }}
            />
          </Paper>
          <S.UserContainer>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                color: '#2F80ED',
              }}
            >
              <h2>Leonardo Souza</h2>
              <span>Documentail</span>
            </div>
            <Avatar alt="user" />
            <IconButton type="button">
              <ExpandMoreOutlinedIcon />
            </IconButton>
          </S.UserContainer>
        </S.Header>
        <S.MainTitle>Dashboard</S.MainTitle>
        <div style={{ display: 'flex' }}>
          <Card
            style={{
              width: '30rem',
              height: '32rem',
              backgroundColor: '#ffffff',
              padding: '2.4rem 3.2rem',
            }}
          >
            <p
              style={{
                textTransform: 'uppercase',
                fontWeight: 'normal',
                color: '#BDBDBD',
                marginBottom: '1.6rem',
              }}
            >
              filtrar por
            </p>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                  Todos os pedidos (32)
                </p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
              <li style={{ marginBottom: '1.6rem', display: 'flex' }}>
                <div
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '50%',
                    marginRight: '1.6rem',
                  }}
                />
                <p style={{ fontSize: '1.25rem' }}>Todos os pedidos (32)</p>
              </li>
            </ul>
          </Card>
          {/* //depois por height 100% */}
          <Card
            style={{
              width: '100%',
              height: '80rem',
              marginLeft: '1.6rem',
            }}
          >
            <h2
              style={{
                paddingTop: '3.2rem',
                paddingLeft: '4rem',
                marginBottom: '2.8rem',
              }}
            >
              Todos os pedidos
            </h2>
            <ul>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '7rem',
                  paddingRight: '8rem',
                  marginBottom: '2.7rem',
                }}
              >
                <img src={iconImage} alt="download" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>
                  #16835
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '.2rem',
                    }}
                  >
                    Maria Luciana
                  </p>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    10/10/2020 18:30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  R$ 5310,88
                </span>

                <div
                  style={{
                    backgroundColor: 'rgb(235,87,87, .37)',
                    padding: '.5rem 1.5rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    color: '#EB5757',
                  }}
                >
                  Aguardando agendamento
                </div>
                <div style={{ display: 'flex' }}>
                  <a style={{ marginRight: '1rem' }} href="/">
                    Ver pedido
                  </a>
                  <div>
                    <CloudDownloadOutlinedIcon
                      style={{ marginRight: '.5rem' }}
                    />
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  paddingTop: '.5rem',
                  paddingLeft: '4rem',
                  color: '#A7A7A7',
                  fontSize: '1.2rem',
                }}
              >
                Mostrando 12 de 120
              </p>
              <div style={{ paddingRight: '8rem' }}>
                <span
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    backgroundColor: '#c4c4c4',
                    padding: '.35rem 1rem',
                    borderRadius: '2px',
                    marginRight: '.8rem',
                  }}
                >
                  1
                </span>
                <span
                  style={{
                    fontSize: '1.4rem',
                    backgroundColor: '#E0E0E0',
                    padding: '.35rem 1rem',
                    borderRadius: '2px',
                    marginRight: '.8rem',
                  }}
                >
                  2
                </span>
                <span
                  style={{
                    fontSize: '1.4rem',
                    backgroundColor: '#E0E0E0',
                    padding: '.35rem 1rem',
                    borderRadius: '2px',
                    marginRight: '.8rem',
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    fontSize: '1.4rem',
                    backgroundColor: '#E0E0E0',
                    padding: '.35rem 1rem',
                    borderRadius: '2px',
                    marginRight: '.8rem',
                  }}
                >
                  4
                </span>
                <span
                  style={{
                    fontSize: '1.4rem',
                    backgroundColor: '#E0E0E0',
                    padding: '.35rem 1rem',
                    borderRadius: '2px',
                  }}
                >
                  5
                </span>
              </div>
            </div>
          </Card>
        </div>
      </S.Container>
    </Grid>
  </>
);

export default Dashboard;
