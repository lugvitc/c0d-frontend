import type { Meta, StoryObj } from "@storybook/react";
import InputBox from "~/components/inputbox"; // Update the path to where your InputBox component is located

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

export const RegistrationNumber: Story = {
  args: {
    variant: "secondary",
    placeholder: "Registration Number",
    type: "text",
  },
};

export const EmailAddress: Story = {
  args: {
    variant: "secondary",
    placeholder: "Email Address",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    variant: "secondary",
    placeholder: "Password ",
    type: "password",
  },
};

export const TeamName: Story = {
  args: {
    variant: "secondary",
    placeholder: "Team Name",
    type: "text",
  },
};

export const TeamMember1: Story = {
  args: {
    variant: "secondary",
    placeholder: "Team Member 1 (Team Lead)",
    type: "text",
  },
};

export const Search: Story = {
  args: {
    variant: "secondary",
    placeholder: "Search",
    type: "text",
  },
};
