// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Layout } from './Layout';

// This default export determines where your story goes in the story list
export default {
  title: 'Main Layout',
  component: Layout,
};

const Template: Story<ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args}>
    <h1>TEST</h1>
  </Layout>
);

export const Open = Template.bind({});
Open.args = {};
