import { GetStartedBtn, StyledContainer, StyledGetStarted, StyledIllustration, TagLine } from "./Intro.style"
//@ts-ignore
import IntroSVG from '@/assets/intro.svg'
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
            </StyledGetStarted>
        </StyledContainer>
    )
}