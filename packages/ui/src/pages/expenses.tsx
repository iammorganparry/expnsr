import { StyledFullPageContainer } from '@/components/common/FullPageContainer/FullPageContainer.styles';
import { Expenses } from '@/components/Expenses/Expenses';
import { Layout } from '@/components/Layout/Layout';
import { Login } from '@/components/Login/Login';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const isLoggedIn = useIsLoggedIn();
  return (
      <>
      <Head key='expenses'>
        <title>expnsr - expenses taken care of</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Expenses />
    </>
  );
}
