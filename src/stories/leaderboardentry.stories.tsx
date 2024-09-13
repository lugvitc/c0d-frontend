import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardEntry from "~/components/leaderboardentry";

const meta: Meta<typeof LeaderboardEntry> = {
  title: "Leaderboard-Entry",
  component: LeaderboardEntry,
  argTypes: {
    rank: {
      control: "number",
      description: "Rank of the player/team",
    },
    name: {
      control: "text",
      description: "Name of the player/team",
    },
    score: {
      control: "number",
      description: "Score of the player/team",
    },
    solvedCount: {
      control: "number",
      description: "Count of solved challenges",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardEntry>;

export const Default: Story = {
  args: {
    rank: 10,
    name: "HECKWTFffffffffffffffffffffffffffffffffffffffffffffffffff",
    score: 1000,
    solvedCount: 42,
  },
};

export const FirstPlace: Story = {
  args: {
    rank: 1,
    name: "Player1 oahdofhadfhalhflkadhflah",
    score: 1500,
    solvedCount: 50,
  },
};

export const SecondPlace: Story = {
  args: {
    rank: 2,
    name: "Player2",
    score: 1200,
    solvedCount: 48,
  },
};

export const ThirdPlace: Story = {
  args: {
    rank: 3,
    name: "Player3",
    score: 1000,
    solvedCount: 45,
  },
};
