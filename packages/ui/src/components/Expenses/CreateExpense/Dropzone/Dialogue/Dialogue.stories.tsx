// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Dialogue } from './Dialogue';

// This default export determines where your story goes in the story list
export default {
  title: 'Expenses/CreateExpense/Dialogue/Dialogue',
  component: Dialogue,
};

const Template: Story<ComponentProps<typeof Dialogue>> = (args) => (
  <Dialogue {...args} />
);

export const Open = Template.bind({});
Open.args = {
  open: true,
};
