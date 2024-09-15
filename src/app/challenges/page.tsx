"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ChallengeCard, { type ChallengeItem } from "~/components/challengeCard";
import Navbar from "~/components/navbar";
import Text from "~/components/text";
import { BACKEND_URL } from "~/lib/constants";

const challengeTypes = [
	"Miscellaneous",
	"Forensics",
	"Web",
	"Binary",
	"Reversing",
	"Crypto",
	"OSINT",
];

interface ChallengeData extends ChallengeItem {
	id: string;
}

function getTypesFromMask(mask: number) {
	const result = [];

	for (let i = 0; i < challengeTypes.length; i++) {
		if (mask & (1 << i)) {
			result.push(challengeTypes[i]);
		}
	}

	return result;
}

export default function ChallengesPage() {
	const [type, setType] = useState("all");
	const [challenges, setChallenges] = useState<ChallengeData[]>([]);

	useEffect(() => {
		if (!window.localStorage.getItem("token")) {
			window.location.href = "/signin";
			return;
		}

		void axios
			.get(`${BACKEND_URL}/ctf/list`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				const data = res.data as {
					id: string;
					name: string;
					description: string;
					points: string;
					author: string;
					tags: number;
				}[];
				const challenges = data.map((challenge) => {
					return {
						id: challenge.id,
						description: challenge.description,
						points: challenge.points,
						title: challenge.name,
						types: getTypesFromMask(challenge.tags),
					} as unknown as ChallengeData;
				});
				setChallenges(challenges);
			});
	}, []);

	const setChallenge = (id: string) => {
		window.localStorage.setItem("challenge", id);
		window.location.href = `/challenge`;
	};

	return (
		<div className="flex flex-col justify-between p-6">
			<Navbar notLanding />
			<div className="flex flex-col justify-between gap-7 p-6">
				<div className="flex justify-between">
					<Text className="text-4xl font-bold" glow="primary">
						CHALLENGES
					</Text>
					{/* a select menu for filtering by type */}
					<select
						className="rounded-lg bg-[#2D2D2D80] p-2 text-white"
						value={type}
						onChange={(e) => setType(e.target.value)}
					>
						<option value="all">All</option>
						{challengeTypes.map((v) => (
							<option key={v} value={v.toLowerCase()}>
								{v}
							</option>
						))}
					</select>
				</div>
				<div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
					{challenges.length === 0 && (
						<Text className="text-2xl font-bold" variant="secondary">
							Loading...
						</Text>
					)}
					{challenges
						.filter((c) =>
							type === "all"
								? true
								: c.types.filter((v) =>
									v.toLowerCase().includes(type.toLowerCase()),
								),
						)
						.map((challenge, index) => (
							<ChallengeCard
								key={index}
								title={challenge.title}
								types={challenge.types}
								description={challenge.description}
								points={challenge.points}
								// solves={challenge.solves}
								onClick={() => setChallenge(challenge.id)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
