import { Login } from '@/components/Login/Login';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const isLoggedIn = useIsLoggedIn()
  return (
    <div className={styles.container}>
      <Head>
        <title>expnsr - expenses taken care of</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoggedIn ?(
        <div>Logged In</div>
      ): (
        <Login />
      )}
    </div>
  );
}
