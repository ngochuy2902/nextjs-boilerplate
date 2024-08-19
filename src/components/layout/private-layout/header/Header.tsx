import React from 'react';
import { Dropdown, Space } from 'antd';
import {
  DownOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggedSidebar } from '@/store/features/ui/uiSlice';
import {
  AvatarStyled,
  MenuButtonStyled,
  Role,
  StyledHeader,
  UserDetails,
  UserInfo,
  Username,
} from './styled';

interface HeaderComponentProps {
  name: string;
  role: string;
  onLogout: () => void;
  onSettingsClick: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  name,
  role,
  onLogout,
  onSettingsClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const ui = useSelector(state => state.ui);

  const menu = [
    {
      key: 'settings',
      label: 'Account settings',
      icon: <SettingOutlined />,
      onClick: onSettingsClick,
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: onLogout,
    },
  ];

  return (
    <StyledHeader>
      <MenuButtonStyled
        className={`${ui.showSidebar ? 'hidden' : ''}`}
        onClick={() => dispatch(toggedSidebar())}
      >
        <MenuUnfoldOutlined />
      </MenuButtonStyled>
      <UserInfo>
        <UserDetails>
          <Username>{name}</Username>
          <Role>{role}</Role>
        </UserDetails>
        <AvatarStyled icon={<UserOutlined />} />
        <Dropdown menu={{ items: menu }} trigger={['click']}>
          <Space>
            <DownOutlined style={{ cursor: 'pointer', marginLeft: '8px' }} />
          </Space>
        </Dropdown>
      </UserInfo>
    </StyledHeader>
  );
};

export default HeaderComponent;
