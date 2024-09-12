import type { Meta, StoryObj } from "@storybook/react";
import Button from "~/components/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "REGISTER",
    href: "https://google.com"
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "SIGN UP",
    href: "https://github.com"
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    text: "REPORT A BUG",
  },
};

export const GhostPrimary: Story = {
  args: {
    variant: "ghost-primary",
    text: "SIGN IN",
  },
};

export const GhostSecondary: Story = {
  args: {
    variant: "ghost-secondary",
    text: "PRIZES",
  },
};
