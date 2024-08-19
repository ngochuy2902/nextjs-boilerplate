import React from 'react';

import { PublicLayoutStyled } from './styled';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <PublicLayoutStyled>{children}</PublicLayoutStyled>;
};

export default PublicLayout;
