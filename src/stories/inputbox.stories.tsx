import type { Meta, StoryObj } from "@storybook/react";
import InputBox from "~/components/inputbox";

const meta: Meta<typeof InputBox> = {
  title: "InputBox",
  component: InputBox,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Name: Story = {
  args: {
    variant: "secondary",
    placeholder: "Name",
    type: "text",
  },
};

export const EmailAddress: Story = {
  args: {
    variant: "secondary",
    placeholder: "Email Address",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    variant: "secondary",
    placeholder: "Password ",
    type: "password",
  },
};
