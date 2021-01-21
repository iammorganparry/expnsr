// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Avatar } from './Avatar';

// This default export determines where your story goes in the story list
export default {
  title: 'TopNav/UserMenu/Avatar',
  component: Avatar,
};

const Template: Story<ComponentProps<typeof Avatar>> = (args) => (
  <Avatar {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
};
