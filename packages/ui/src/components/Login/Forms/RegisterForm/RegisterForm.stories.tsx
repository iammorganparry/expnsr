// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { RegisterForm } from './RegisterForm';

// This default export determines where your story goes in the story list
export default {
  title: 'Register Form',
  component: RegisterForm,
};

const Template: Story<ComponentProps<typeof RegisterForm>> = (args) => (
  <RegisterForm {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};
