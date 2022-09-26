import React from 'react';

import { Hello } from './Hello';

export default {
  title: 'components/Hello',
  component: Hello,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Hello {...args} />;

export const Primary = Template.bind({});


