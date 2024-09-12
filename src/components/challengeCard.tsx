"use client";
import Text from "~/components/text";
import { BsNut } from "react-icons/bs";

import React from "react";
import { useState } from "react";

// Reusable Text Component for challenge descriptions

// Main Challenge Card Component
const ChallengeCard: React.FC<{
  title: string;
  type: string;
  description: string;
  points: number;
  difficulty: string;
  solves: number;
}> = ({ title, type, description, points, difficulty, solves = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  {
    return (
      <div
        style={isHovered ? { opacity: 0.8 } : { opacity: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={cardStyle}>
          <div style={contentStyle}>
            <BsNut size={52} style={{ transform: "rotate(90deg)" }} />
            <Text
              variant="secondary"
              glow="secondary"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              <br></br>
              {title}
            </Text>
            <Text
              variant="secondary"
              glow="secondary"
              style={{ fontSize: "16px" }}
            >
              {type}
            </Text>
            <Text
              variant="secondary"
              glow="secondary"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              <br></br>
              {points} {difficulty}
            </Text>
            <Text
              variant="secondary"
              glow="secondary"
              style={{ fontSize: "18px" }}
            >
              <br></br>
              {description}
            </Text>
            <Text
              variant="secondary"
              glow="secondary"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              <br></br>SOLVED TIMES {solves}
            </Text>
          </div>
        </div>
      </div>
    );
  }
};

// Styles (using inline for simplicity)
const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(30, 30, 33, 1)", // Semi-transparent background
  padding: "24px",
  borderRadius: "16px",
  width: "520px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s ease", // Hover effect
  cursor: "pointer",
  color: "#000000",
  marginBottom: "20px",
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export default ChallengeCard;
