import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { NavigationBtns } from "./NavigationBtns/NavigationBtns"
import { StyledTopNav } from "./TopNav.styles"
import { UserMenu } from './UserMenu/UserMenu'
export const TopNav = () => {

    return (
        <StyledTopNav>
            <NavigationBtns btnConfig={[{
                route: '/',
                Icon: AiOutlineLeft
            },
            {
                route: '/',
                Icon: AiOutlineRight
            }]} />
            <UserMenu />
        </StyledTopNav>
    )
}