import { StyledFullPageContainer } from '@/components/common/FullPageContainer/FullPageContainer.styles';
import { CreateExpense } from '@/components/Expenses/CreateExpense/CreateExpense';
import { Expenses } from '@/components/Expenses/Expenses';
import { Header } from '@/components/Layout/Header/Header';
import { Layout } from '@/components/Layout/Layout';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import Head from 'next/head';

export default function Home() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <Layout>
      <Header title="Expenses" />
      {/* <CreateExpense /> */}
    </Layout>
  );
}
