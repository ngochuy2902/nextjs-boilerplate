import { Button, Layout } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

export const SiderStyled = styled(Sider)`
  &.hidden {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const MenuHeaderStyled = styled.div`
  padding: 0 10px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  &.hidden {
    display: none;
  }
`;

export const HeaderButtonStyled = styled(Button)`
  &.hidden {
    display: none;
  }
`;

export const IconStyled = styled.div`
  svg {
    width: 22px;
    height: 22px;
    color: white;
    &:hover {
      color: currentColor;
    }
  }
`;
