import { ChildrenClear, StyledContent } from "./Content.style"

export const Content: React.FC = ({ children }) => {
    return (
        <StyledContent>
            <ChildrenClear>
                {children}
            </ChildrenClear>
        </StyledContent>
    )
}