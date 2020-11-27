import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

interface TextProps {
  size?: string | number;
}

const TEXT_MODIFIERS = {
  black: () => 'color: #13314C',
  black1: () => 'color: #4F4F4F',
  gray: () => 'color: #BDBDBD',
  blue: () => 'color: #2F80ED',
  awaitingAppointment: () => 'background-color: rgb(235, 87, 87, 0.37); color: #eb5757; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  awaitingApproval: () => 'background-color: rgb(242, 153, 74, 0.37); color: #F2994A; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  forwarded: () => 'background-color: rgb(242, 201, 76, 0.37); color: #D4A926; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  onCarriage: () => 'background-color: rgb(45, 156, 219, 0.37); color: #2D9CDB; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  inAnalysis: () => 'background-color: rgb(155, 81, 224, 0.37); color: #9B51E0; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  awaitingPayment: () => 'background-color: rgb(235, 87, 87, 0.37); color: #EB5757; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  finished: () => 'background-color: rgb(39, 174, 96, 0.37); color: #27AE60; font-size: 1rem; font-weight: 400; padding: 0.6rem 1.1rem; border-radius: 16px;',
  header1: () => 'font-size: 2.4rem; letter-spacing: -0.05em; line-height: 29px; font-weight: 600;',
  header2: () => 'font-size: 1.8rem; font-weight: 700;',
  header3: () => 'font-size: 1.6rem; font-weight: 600;',
  header4: () => 'font-size: 1.4rem; font-weight: 400;',
  body: () => 'font-size: 2rem; letter-spacing: 0.4px;',
  description: () => 'font-size: 1rem; font-weight: 400;',
  bodyFilter: () => 'font-size: 1.4rem; line-height: 17px; font-weight: 400;',
  bodyFilterBold: () => 'font-size: 1.4rem; line-height: 17px; font-weight: 700;',
};

export const Text = styled.p<TextProps>`
  font-size: 2rem;
  color: #170c3a;

  ${({ size }) => size
    && ` font-size: ${size}rem!important;
    `}

  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;
