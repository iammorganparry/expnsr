import { ComponentProps, useContext } from "react"
import { AuthorizedUserContext } from "../../../../../hooks/useAuthorizeUser"
import { Avatar as MaterialAvatar } from '@material-ui/core';
import { AvatarContainer } from "./Avatar.styles";
import Image from "next/image";
import faker from 'faker'

interface Avatar extends ComponentProps<typeof MaterialAvatar> {}
export const Avatar = (props) => {
    const [user] = useContext(AuthorizedUserContext)
    return (
        <AvatarContainer>
        <MaterialAvatar {...props}>
           <img alt='avatar' src={user?.user_metadata?.avatar_url || faker.image.avatar} />
            {/* <p>{user?.email  || 'MP'}</p> */}
        </MaterialAvatar>
        </AvatarContainer>
    )
}