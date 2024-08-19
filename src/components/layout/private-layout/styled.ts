import styled from 'styled-components';
import { Layout as LayoutAnt } from 'antd';

const { Content } = LayoutAnt;

export const LayoutStyled = styled(LayoutAnt)`
  min-height: 100vh;
`;

export const ContentStyled = styled(Content)`
  height: calc(100vh - 64px - 70px);
  padding: 16px;
`;
