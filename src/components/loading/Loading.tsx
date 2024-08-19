import React from 'react';
import { Spin } from 'antd';

import { WrapperStyled } from './styled';

const Loading: React.FC = () => (
  <WrapperStyled>
    <Spin size="large" />
  </WrapperStyled>
);

export default Loading;
