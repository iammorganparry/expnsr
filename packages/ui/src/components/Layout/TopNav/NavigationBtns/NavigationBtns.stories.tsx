// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NavigationBtns } from './NavigationBtns';

// This default export determines where your story goes in the story list
export default {
  title: 'TopNav/NavigationButtons',
  component: NavigationBtns,
} as Meta;

const Template: Story<ComponentProps<typeof NavigationBtns>> = (args) => (
  <NavigationBtns {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
  btnConfig: [
    { route: '/', icon: <div /> },
    { route: '/', icon: <div /> },
  ],
};
