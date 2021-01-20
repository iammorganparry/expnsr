// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TextInput } from './TextInput';

// This default export determines where your story goes in the story list
export default {
  title: 'Text Input',
  component: TextInput,
};

const Template: Story<ComponentProps<typeof TextInput>> = (args) => (
  <TextInput {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'john@doe.com',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  type: 'email',
  disabled: true,
};
