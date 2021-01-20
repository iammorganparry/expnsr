// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Link } from './Link';

// This default export determines where your story goes in the story list
export default {
  title: 'Navigation Link',
  component: Link,
};

const Template: Story<ComponentProps<typeof Link>> = (args) => (
  <Link {...args} />
);

export const Selected = Template.bind({});
Selected.args = {
    link: {
        href: '/'
    }
};

export const NotSelected = Template.bind({});
NotSelected.args = {
    link: {
        href: '/foo'
    }
};