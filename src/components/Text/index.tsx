import React, { CSSProperties } from 'react';
import * as S from './styled';

interface TextProps {
  component?: any;
  modifiers?: any;
  style?: CSSProperties;
  size?: string | number;
  children: any;
}
const Text: React.FC<TextProps> = ({
  component,
  children,
  modifiers,
  size,
  style,
}) => {
  const TextComponent = component ? S.Text.withComponent(component) : S.Text;

  return (
    <TextComponent modifiers={modifiers} size={size} style={style}>
      {children}
    </TextComponent>
  );
};
export default Text;
