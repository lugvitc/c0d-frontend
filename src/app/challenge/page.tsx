"use client";
import React, { useEffect, useState } from "react";
import IconButton from "~/components/IconButton";
import Text from "~/components/text";
import Button from "~/components/button";
import InputBox from "~/components/inputbox";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "~/components/navbar";
import { type ChallengeItem } from "~/components/challengeCard";
import { BACKEND_URL, CHALLENGE_IP } from "~/lib/constants";
import axios from "axios";

const challengeTypes = [
  "Miscellanious",
  "Forensics",
  "Web",
  "Binary",
  "Reversing",
  "Crypto",
  "OSINT",
];

const msgCodes = [
  "db_error",
  "port_limit_reached",
  "ctf_not_found",
  "container_start",
  "container_stop",
  "containers_team_stop",
  "container_not_found",
  "container_already_running",
  "container_limit_reached",
  "hint_limit_reached",
  "team_not_found",
  "user_not_found",
  "ctf_solved",
  "signup_success",
  "wrong_password",
  "login_success",
  "team_exists",
  "user_added",
  "user_removed",
  "user_already_in_team",
  "user_not_in_team",
  "insufficient_coins",
  "user_or_email_exists",
  "users_not_found",
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

type StatusType = "on" | "off" | "starting" | "stopping";

const ChallengePage: React.FC = () => {
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [flag, setFlag] = useState<string>("");
  const [response, setResponse] = useState("");
  const [correct, setCorrect] = useState("");
  const [ports, setPorts] = useState<number[]>([]);
  const [status, setStatus] = useState<StatusType>("off");

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.href = "/signin";
      return;
    }
    
    const id = window.localStorage.getItem("challenge");
    void axios
      .get<
        {
          id: string;
          name: string;
          description: string;
          points: string;
          author: string;
          tags: number;
        }[]
      >(`${BACKEND_URL}/ctf/${id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data[0];
        if (!data) return;
        const chall = {
          id: data.id,
          title: data.name,
          description: data.description,
          points: data.points,
          types: getTypesFromMask(data.tags),
        } as unknown as ChallengeData;
        setChallenge(chall);
      });
  }, []);

  const showHintResponse = (msgCode: number) => {
    if (!(window as unknown as { debugMode: boolean }).debugMode) return;
    setResponse(msgCodes[msgCode] ?? "");
    setTimeout(() => {
      setResponse("");
    }, 2000);
  };

  const startInstance = async () => {
    const id = window.localStorage.getItem("challenge");
    const res = (
      await axios.post<{
        msg_code: number;
        ports: number[];
        ctd_id: number[];
      }>(
        `${BACKEND_URL}/ctf/${id}/start`,
        {},
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        },
      )
    ).data;
    showHintResponse(res.msg_code);
    if (res.msg_code === 3) {
      setPorts(res.ports);
      setStatus("on");
    }
  };

  const stopInstance = async () => {
    const id = window.localStorage.getItem("challenge");
    const res = await axios.post<{
      msg_code: number;
    }>(
      `${BACKEND_URL}/ctf/${id}/stop`,
      {},
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      },
    );
    showHintResponse(res.data.msg_code);
    if (res.data.msg_code === 4 || res.data.msg_code === 6) {
      setPorts([]);
      setStatus("off");
    }
  };

  const killAll = async () => {
    const res = await axios.post<{
      msg_code: number;
    }>(
      BACKEND_URL + "ctf/stopall",
      {},
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      },
    );
    showHintResponse(res.data.msg_code);
    if (res.data.msg_code === 5) {
      setPorts([]);
      setStatus("off");
    }
  };

  const submitFlag = async () => {
    const id = window.localStorage.getItem("challenge");
    const res = await axios.post<{
      msg_code?: number;
      status?: boolean;
    }>(
      `${BACKEND_URL}/ctf/${id}/flag`,
      {
        flag,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      },
    );
    if (res.data.msg_code) {
      showHintResponse(res.data.msg_code);
      setCorrect("Invalid flag!");
    }
    if (res.status) setCorrect("Correct flag!");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between p-6">
      <Navbar notLanding />
      <div className="flex min-h-screen justify-between p-6">
        <div className="flex w-3/5 gap-4 bg-transparent p-6">
          <div className="mt-2">
            <IconButton
              icon={IoIosArrowBack}
              onClick={() => window.history.back()}
            />
          </div>
          <div className="flex flex-col gap-10">
            <Text className="text-3xl font-bold" glow="primary">
              {challenge?.title.toUpperCase() ?? "Loading..."}
            </Text>
            <div className="flex flex-col gap-2">
              <Text className="text-lg" variant="white">
                {challenge?.description.toUpperCase() ?? "Loading..."}
              </Text>

              <div className="mt-2 flex w-full space-x-4">
                {/* <Text className="text-base" variant="white">
                  EASY
                </Text> */}
                <Text className="text-base" variant="white">
                  {challenge?.points ?? 0} POINTS
                </Text>
                {/* <Text className="text-base" variant="white">
                  SOLVED COUNT
                </Text> */}
              </div>
              <Text className="text-sm" variant="secondary">
                {response}
              </Text>
            </div>

            {ports.map((port) => (
              <div key={port} className="flex gap-4">
                <Text className="text-lg font-bold">
                  {CHALLENGE_IP}:{port}
                </Text>
              </div>
            ))}

            {status === "on" ? (
              <Button className="w-1/2 min-w-fit" onClick={stopInstance}>
                STOP INSTANCE
              </Button>
            ) : (
              <Button className="w-1/2 min-w-fit" onClick={startInstance}>
                START INSTANCE
              </Button>
            )}

            <div className="flex flex-col gap-4">
              <Text className="ml-2 text-xl">{correct}</Text>
              <div className="flex items-center space-x-8">
                <InputBox
                  className="rounded-2xl border-2 p-4"
                  variant="secondary"
                  placeholder="Flag"
                  onChange={(v) => setFlag(v.target.value)}
                />
                <Button variant="secondary" onClick={submitFlag}>
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/4 items-start justify-end p-6">
          <Button variant="secondary" onClick={killAll}>
            KILL ALL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
