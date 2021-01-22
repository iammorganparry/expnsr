// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { CreateExpense } from './CreateExpense';

// This default export determines where your story goes in the story list
export default {
  title: 'Expenses/CreateExpense',
  component: CreateExpense,
};

const Template: Story<ComponentProps<typeof CreateExpense>> = (args) => (
  <CreateExpense {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};
