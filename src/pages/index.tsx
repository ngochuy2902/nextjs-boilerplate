import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const HomePage = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLanguage = async (locale: string) => {
    await i18n.changeLanguage(locale);
    await router.replace({ pathname, query }, asPath, {
      locale,
    });
    localStorage.setItem('locale', locale);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>{t('welcome')}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async ({ locale }: GetServerSideProps) => {
  return {
    props: {
      initialLocale: locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
