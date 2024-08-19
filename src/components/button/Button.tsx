import React from 'react';
import { ButtonProps } from 'antd/lib/button';

import { ButtonStyled } from './styled';

type Props = {
  children: React.ReactNode;
} & Omit<ButtonProps, 'children'>;

const Button: React.FC<Props> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

export default Button;
