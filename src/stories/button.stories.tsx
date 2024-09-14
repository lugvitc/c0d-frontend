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
    className: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "REGISTER",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "SIGN UP",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "REPORT A BUG",
  },
};

export const GhostPrimary: Story = {
  args: {
    variant: "ghost-primary",
    children: "SIGN IN",
  },
};

export const GhostSecondary: Story = {
  args: {
    variant: "ghost-secondary",
    children: "PRIZES",
  },
};
