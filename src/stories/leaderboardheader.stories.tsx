import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardHeader from "~/components/leaderboardheader";

const meta: Meta<typeof LeaderboardHeader> = {
  title: "Leaderboard-Header",
  component: LeaderboardHeader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LeaderboardHeader>;

// Default story showing the header
export const Header: Story = {
  args: {},
};
