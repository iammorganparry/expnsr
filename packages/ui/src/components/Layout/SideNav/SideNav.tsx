import { StyledSideNav } from "./SideNav.style"
import routes from '../../../routes'
import {Link} from './Link/Link'
export const SideNav = () => {

    return (
        <StyledSideNav>
            {routes.map(route => (
                <Link link={route} />
            ))}
        </StyledSideNav>
    )
}