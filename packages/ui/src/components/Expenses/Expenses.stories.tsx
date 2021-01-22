// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Expenses } from './Expenses';

// This default export determines where your story goes in the story list
export default {
  title: 'Expenses',
  component: Expenses,
};

const Template: Story<ComponentProps<typeof Expenses>> = (args) => (
  <Expenses {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};
