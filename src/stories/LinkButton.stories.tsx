import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "~/components/LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "LinkButton",
  component: LinkButton,
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "ghost-primary",
        "ghost-secondary",
      ],
      control: {
        type: "select",
      },
    },
    href: {
      control: "text",
    },
    className: {
      control: "text",
    },
    text: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "REGISTER",
    href: "https://google.com",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "SIGN UP",
    href: "https://github.com",
  },
};
