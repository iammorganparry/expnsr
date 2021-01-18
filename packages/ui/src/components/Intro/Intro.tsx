import { GetStartedBtn, StyledContainer, StyledFooter, StyledGetStarted, StyledIllustration, TagLine, StyledLogo } from "./Intro.style"
//@ts-ignore
import IntroSVG from '@/assets/intro.svg'
import { GoogleBtn } from "./Auth/GoogleSSO/Google"
export const Intro = () => {

    return (
        <StyledContainer>
            <StyledIllustration>
                <IntroSVG />
            </StyledIllustration>
            <StyledGetStarted>
                <TagLine>
                    Lets take care of those expenses
                </TagLine>
                <GetStartedBtn>
                    Get Started
                </GetStartedBtn>
                <GoogleBtn />
            </StyledGetStarted>
            {/* <StyledFooter> */}
                <StyledLogo>
                    expnsr
                </StyledLogo>
            {/* </StyledFooter> */}
        </StyledContainer>
    )
}