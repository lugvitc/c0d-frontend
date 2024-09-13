import challengeCard from "~/components/challengeCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof challengeCard> = {
  title: "challengeCard",
  component: challengeCard,
  argTypes: {
    title: {
      control: {
        type: "select",
      },
    },
    type: {
      control: {
        type: "select",
      },
    },
    description: {
      control: {
        type: "select",
      },
    },
    points: {
      control: {
        type: "select",
      },
    },
    difficulty: {
      control: {
        type: "select",
      },
    },
    solves: {
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof challengeCard>;

export const Card: Story = {
  args: {
    title: "CHALLENGE TITLE",
    type: "TYPE",
    description: "CHALLENGE DESCRIPTION",
    difficulty: "EASY",
    points: 100,
    solves: 3,
  },
};
