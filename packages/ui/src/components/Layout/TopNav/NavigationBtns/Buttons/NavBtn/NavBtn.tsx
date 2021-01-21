import { IconButton } from "@material-ui/core"
import { useRouter } from "next/router"
import { ComponentProps } from "react"
import { AiOutlineRight } from "react-icons/ai"

interface NavBtnProps extends ComponentProps<typeof IconButton> {
    Icon?: React.ElementType
    route: string
}
export const NavBtn = ({ Icon = AiOutlineRight, route, ...others }: NavBtnProps) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(route)
    }
    return (
        <IconButton onClick={handleClick} {...others}>
            <Icon />
        </IconButton>
    )
}