import { ChildrenContainer, StyledHeader, StyledHeaderText } from "./Header.style"

interface HeaderProps {
    title: string
    children: React.ElementType
}
export const Header: React.FC = ({ children, title }: HeaderProps) => {

    return (
        <StyledHeader>
            <StyledHeaderText>{title}</StyledHeaderText>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </StyledHeader>
    )
}