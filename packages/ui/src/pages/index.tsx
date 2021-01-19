<<<<<<< Updated upstream
import { Login } from '@/components/Login/Login';
=======
import { LoginForm } from 'components/Intro/Auth/GoogleSSO/LoginForm/LoginForm';
import { Intro } from '@/components/Intro/Intro';
>>>>>>> Stashed changes
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>expnsr - expenses taken care of</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< Updated upstream
      <Login />
=======
      <Intro />
      <LoginForm
>>>>>>> Stashed changes
    </div>
  );
}
