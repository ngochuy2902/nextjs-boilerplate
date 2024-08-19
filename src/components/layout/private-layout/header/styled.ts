import styled from 'styled-components';
import { Avatar, Button, Layout } from 'antd';

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  right: 0;
  margin-right: 10px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  line-height: initial;
  text-align: right;
`;

export const Username = styled.span`
  font-size: 14px;
  color: #1c2434;
`;

export const Role = styled.span`
  font-size: 12px;
  color: #64748b;
`;

export const AvatarStyled = styled(Avatar)`
  width: 48px;
  height: 48px;
`;

export const MenuButtonStyled = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
  &.hidden {
    display: none;
  }
`;
