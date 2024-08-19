import React, { useEffect } from 'react';
import { Layout } from 'antd';

import { LOCAL_STORAGE_KEY } from '@/constants';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { meThunk } from '@/store/features/user/userApi';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import { ContentStyled, LayoutStyled } from './styled';

type LayoutProps = {
  children: React.ReactNode | React.ReactElement;
};

const PrivateLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(state => state.user);

  const getProfile = () => {
    dispatch(meThunk());
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
    await router.push('/login');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  return (
    <LayoutStyled>
      <Sidebar />
      <Layout>
        <Header
          name={user.name}
          role="Manager"
          onLogout={handleLogout}
          onSettingsClick={handleSettingsClick}
        />
        <ContentStyled>{children}</ContentStyled>
      </Layout>
    </LayoutStyled>
  );
};

export default PrivateLayout;
