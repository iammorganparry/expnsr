// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { NavBtn } from './NavBtn';
import { AiOutlineRight } from 'react-icons/ai';

// This default export determines where your story goes in the story list
export default {
  title: 'TopNav/NavigationButtons/Btns',
  component: NavBtn,
};

const Template: Story<ComponentProps<typeof NavBtn>> = (args) => (
  <NavBtn {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
  route: '/',
};
