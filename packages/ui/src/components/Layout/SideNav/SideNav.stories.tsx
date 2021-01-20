// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SideNav } from './SideNav';

// This default export determines where your story goes in the story list
export default {
  title: 'Side Nav',
  component: SideNav,
};

const Template: Story<ComponentProps<typeof SideNav>> = (args) => (
  <SideNav {...args} />
);

export const Open = Template.bind({});
Open.args = {

};