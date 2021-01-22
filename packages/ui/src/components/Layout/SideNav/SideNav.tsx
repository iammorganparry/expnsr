import { RouteContainer, StyledSideNav } from './SideNav.style';
import routes from '../../../routes';
import { Link } from './Link/Link';

export const SideNav = () => {
  return (
    <StyledSideNav>
      <RouteContainer>
        {routes.map((route, index) => (
          <Link key={index} link={route} />
        ))}
      </RouteContainer>
    </StyledSideNav>
  );
};
