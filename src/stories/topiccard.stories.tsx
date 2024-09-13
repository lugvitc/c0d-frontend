import type { Meta, StoryObj } from "@storybook/react";
import Card from "~/components/topiccard";

const meta: Meta<typeof Card> = {
  title: "Topic-Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
      description: "The title or text displayed on the card",
    },
    variant: {
      control: {
        type: "select",
        options: ["regular", "glow"],
      },
      description: "Card variant (regular or glow)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Regular: Story = {
  args: {
    title: "OPERATING SYSTEMS",
    variant: "regular",
  },
};

export const Glow: Story = {
  args: {
    title: "WEB EXPLOITATION",
    variant: "glow",
  },
};
