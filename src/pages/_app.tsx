import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Providers as ReduxProvider } from '@/store/provider';
import { App as AntApp, ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { DefaultThemeStyled, Theme } from '@/theme';
import { useRouter } from 'next/router';
import PrivateLayout from '@/components/layout/private-layout/PrivateLayout';
import PublicLayout from '@/components/layout/public-layout/PublicLayout';
import { ReactNode } from 'react';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const urlLogin = ['/login'];

  const getLayout = urlLogin.includes(router.pathname)
    ? (page: ReactNode) => <PublicLayout>{page}</PublicLayout>
    : (page: ReactNode) => <PrivateLayout>{page}</PrivateLayout>;

  return (
    <>
      <ReduxProvider>
        <ConfigProvider
          theme={{ ...Theme }}
          button={{ autoInsertSpace: false }}
        >
          <ThemeProvider theme={{ ...DefaultThemeStyled }}>
            <AntApp>{getLayout(<Component {...pageProps} />)}</AntApp>
          </ThemeProvider>
        </ConfigProvider>
      </ReduxProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
