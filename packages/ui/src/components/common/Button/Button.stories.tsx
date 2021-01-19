// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Button } from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
text: 'Submit',
};

export const Disabled = Template.bind({})
Disabled.args ={
  text: 'Submit'
}