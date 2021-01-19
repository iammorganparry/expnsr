// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LoginForm } from './LoginForm';

// This default export determines where your story goes in the story list
export default {
  title: 'Login Form',
  component: LoginForm,
};

const Template: Story<ComponentProps<typeof LoginForm>> = (args) => (
  <LoginForm {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {

};