import type { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "../../components/signup/signup-form";

const meta: Meta<typeof SignUpForm> = {
  title: "Forms/SignUpForm",
  component: SignUpForm,
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {},
};
