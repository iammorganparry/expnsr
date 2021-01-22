// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Dropzone } from './Dropzone';

// This default export determines where your story goes in the story list
export default {
  title: 'Expenses/CreateExpense/Dropzone',
  component: Dropzone,
};

const Template: Story<ComponentProps<typeof Dropzone>> = (args) => (
  <Dropzone {...args} />
);

export const Open = Template.bind({});
Open.args = {};
