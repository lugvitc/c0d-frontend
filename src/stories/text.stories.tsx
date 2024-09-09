import React from "react";
import type { StoryFn, Meta } from "@storybook/react";
import Text from "~/components/text";

export default {
  title: "Text",
  component: Text,
} as Meta;

function Template(): JSX.Element {
  return <Text>Hello world</Text>;
}

export const Default = Template.bind({}) as StoryFn;
