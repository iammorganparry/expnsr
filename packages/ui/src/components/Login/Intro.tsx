import { StyledGetStarted, StyledIllustration, TagLine, StyledLogo } from "./Intro.style"
//@ts-ignore
import IntroSVG from '@/assets/intro.svg'
import { LoginForm } from "./Forms/LoginForm/LoginForm"
import { StyledFullPageContainer } from "../common/FullPageContainer/FullPageContainer.styles"
export const Intro = () => {

    return (
        <StyledFullPageContainer>
            <StyledIllustration>
                <IntroSVG />
            </StyledIllustration>
            <StyledGetStarted>
                <TagLine>
                    Lets take care of those expenses
                </TagLine>
                <LoginForm />
            </StyledGetStarted>
            {/* <StyledFooter> */}
                <StyledLogo>
                    expnsr
                </StyledLogo>
            {/* </StyledFooter> */}
        </StyledFullPageContainer>
    )
}