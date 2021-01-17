import { Intro } from '@/components/Intro/Intro';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>expnsr - expenses taken care of</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
}
