import { StyledLink } from "./Link.styles";
import { ApplicationRouteLink } from "@/routes";
import { useRouter } from 'next/router'
interface LinkProps {
    link: ApplicationRouteLink
}
export const Link = ({ link }: LinkProps) => {
    const router = useRouter() 
    const isSelected = router.pathname === link.href
    return(
        <StyledLink selected={isSelected} href={link.href}>{link.name}</StyledLink>
    )
}