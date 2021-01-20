// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SignUp } from './SignUp';

// This default export determines where your story goes in the story list
export default {
  title: 'Sign-up Page',
  component: SignUp,
};

const Template: Story<ComponentProps<typeof SignUp>> = (args) => (
  <SignUp {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};
