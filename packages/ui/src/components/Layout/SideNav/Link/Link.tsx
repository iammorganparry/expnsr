import { StyledLink } from './Link.styles';
import { ApplicationRouteLink } from '@/routes';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

interface LinkProps {
  link: ApplicationRouteLink;
}
export const Link = ({ link }: LinkProps) => {
  const router = useRouter();
  const isSelected = router.pathname === link.href;
  return (
    <NextLink href={link.href} passHref>
      <StyledLink selected={isSelected}>
        {link.Icon && <link.Icon />}
        {link.name}
      </StyledLink>
    </NextLink>
  );
};
