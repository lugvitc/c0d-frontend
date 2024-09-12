import type { Meta, StoryObj } from "@storybook/react";
import Text from "~/components/text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    glow: {
      options: ["none", "primary", "secondary"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    variant: "primary",
    glow: "primary",
    children: "Hello world",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    glow: "secondary",
    children: "Hello world",
  },
};

export const PrimaryNoGlow: Story = {
  args: {
    variant: "primary",
    glow: "none",
    children: "Hello world",
  },
};

export const SecondaryNoGlow: Story = {
  args: {
    variant: "secondary",
    glow: "none",
    children: "Hello world",
  },
};
