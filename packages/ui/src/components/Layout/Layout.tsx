import { Content } from './Content/Content';
import { LayoutContainer } from './Layout.style';
import { SideNav } from './SideNav/SideNav';
import { TopNav } from './TopNav/TopNav';

export const Layout = ({ children }) => {
  return (
      <>
      <TopNav />
      <SideNav />
      <Content>{children}</Content>
      </>
  );
};
