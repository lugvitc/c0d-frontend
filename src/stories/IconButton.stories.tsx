import type { Meta, StoryObj } from "@storybook/react";
import { IoIosArrowBack } from "react-icons/io";
import IconButton from "~/components/IconButton";
import { useRouter } from "next/router";

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      options: ["primary"],
      control: {
        type: "select",
      },
    },
    iconSize: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const GoBackButton: Story = {
  args: {
    variant: "primary",
    icon: IoIosArrowBack,
    iconSize: 24,
  },
  render: (args) => {
    const router = useRouter();

    return (
      <IconButton
        {...args}
        onClick={() => {
          router.back();
        }}
      />
    );
  },
};
