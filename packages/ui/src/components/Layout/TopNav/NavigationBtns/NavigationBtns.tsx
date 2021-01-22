import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { NavBtn } from "./Buttons/NavBtn/NavBtn"
import { StyledContainer } from "./NavigationBtns.styles"

interface ButtonConfig {
    route: string
    Icon: React.ElementType
}
interface NavigationBtnsProps {
    btnConfig: ButtonConfig[]
}
export const NavigationBtns = ({ btnConfig }: NavigationBtnsProps) => {

    return (
        <StyledContainer>
            {btnConfig.map((config, index) => (
            <NavBtn key={index} route={config.route} disabled Icon={config.Icon} />
            ))}
        </StyledContainer>
    )
}