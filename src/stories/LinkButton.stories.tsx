import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "~/components/LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "LinkButton",
  component: LinkButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    className: {
      control: "text",
    },
    children: {
      control: "text",
    }
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "REGISTER",
    href: "https://google.com",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "SIGN UP",
    href: "https://github.com",
  },
};
