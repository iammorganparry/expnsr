// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Header } from './Header';

// This default export determines where your story goes in the story list
export default {
  title: 'Header',
  component: Header,
};

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args}>
      <p>Children</p>
  </Header>
);

export const Rendered = Template.bind({});
Rendered.args = {
    title: 'Header'
};
