// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { CreateForm } from './CreateForm';

// This default export determines where your story goes in the story list
export default {
  title: 'Expenses/CreateExpense/CreateForm',
  component: CreateForm,
};

const Template: Story<ComponentProps<typeof CreateForm>> = (args) => (
  <CreateForm {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};
