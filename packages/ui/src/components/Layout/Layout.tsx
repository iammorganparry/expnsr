import Head from 'next/head';
import { Content } from './Content/Content';
import { LayoutContainer } from './Layout.style';
import { SideNav } from './SideNav/SideNav';
import { TopNav } from './TopNav/TopNav';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head key="expenses">
        <title>expnsr - expenses taken care of - Create Expense</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <SideNav />
      <Content>{children}</Content>
    </>
  );
};
