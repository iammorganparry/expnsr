// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { GoogleBtn } from './Google';

// This default export determines where your story goes in the story list
export default {
  title: 'Goolge SSO Button',
  component: GoogleBtn,
};

const Template: Story<ComponentProps<typeof GoogleBtn>> = (args) => (
  <GoogleBtn {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {};

export const Disabled = Template.bind({});
Disabled.args = {};
