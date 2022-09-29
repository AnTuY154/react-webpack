import React from "react";

import { Hello } from "./Hello";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Wrapper from "../components/Wrapper/Wrapper";

export default {
  title: "components/Hello",
  component: Hello,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <Provider store={store}>
    <Wrapper>
      <Hello {...args} />
    </Wrapper>
  </Provider>
);

export const Primary = Template.bind({});
