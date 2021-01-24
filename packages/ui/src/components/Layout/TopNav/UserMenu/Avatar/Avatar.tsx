import { ComponentProps, useContext } from 'react';
import { AuthorizedUserContext } from '../../../../../hooks/useAuthorizeUser';
import { Avatar as MAvatar } from '@material-ui/core';
import { AvatarContainer, MaterialAvatar } from './Avatar.styles';
import faker from 'faker';

interface Avatar extends ComponentProps<typeof MAvatar> {}
export const Avatar = (props: Avatar) => {
  const [user] = useContext(AuthorizedUserContext);
  return (
    <AvatarContainer>
      <MaterialAvatar
        src={user?.user_metadata?.avatar_url || faker.image.avatar}
        {...props}
      ></MaterialAvatar>
    </AvatarContainer>
  );
};
