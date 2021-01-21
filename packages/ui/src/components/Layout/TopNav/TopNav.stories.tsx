// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TopNav } from './TopNav';

// This default export determines where your story goes in the story list
export default {
  title: 'TopNav',
  component: TopNav,
};

const Template: Story<ComponentProps<typeof TopNav>> = (args) => (
  <TopNav {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
};
