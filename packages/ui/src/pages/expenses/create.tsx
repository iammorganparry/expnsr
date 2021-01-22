import { CreateExpense } from '@/components/Expenses/CreateExpense/CreateExpense';
import { Layout } from '@/components/Layout/Layout';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import Head from 'next/head';

export default function Home() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <Layout>
      <CreateExpense />
    </Layout>
  );
}
