// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { CurrencyInput } from './CurrencyInput';
import { RiShoppingBasketLine } from 'react-icons/ri';

// This default export determines where your story goes in the story list
export default {
  title: 'Currency Input',
  component: CurrencyInput,
};

const Template: Story<ComponentProps<typeof CurrencyInput>> = (args) => (
  <CurrencyInput {...args} />
);

export const Rendered = Template.bind({});
Rendered.args = {
  label: 'Price',
  placeholder: '$12.99',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Price',
  placeholder: '$12.99',
  StartIcon: RiShoppingBasketLine,
};
