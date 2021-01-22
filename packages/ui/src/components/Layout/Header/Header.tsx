import {
  ChildrenContainer,
  StyledHeader,
  StyledHeaderText,
} from './Header.style';

interface HeaderProps {
  title: string;
  children?: React.FC;
}
export const Header = ({ children, title }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderText>{title}</StyledHeaderText>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledHeader>
  );
};
