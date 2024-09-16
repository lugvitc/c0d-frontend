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
import { CgSpinner } from "react-icons/cg";
import { useToast } from "~/components/hooks/use-toast";

const challengeTypes = [
  "Miscellaneous",
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
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState<string>("");
  const [response, setResponse] = useState("");
  const [correct, setCorrect] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const [ports, setPorts] = useState<number[]>([]);
  const [status, setStatus] = useState<StatusType>("off");
  const { toast } = useToast();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.href = "/signin";
      console.error("You need to be signed in to view this page");
      toast({
        title: "Error",
        description: "You need to be signed in to view this page",
        duration: 5000,
      });
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
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to fetch challenge",
          duration: 5000,
        });
        setLoading(false);
      });
  }, [toast]);

  const showHintResponse = (msgCode: number) => {
    if (msgCode === -1) return;
    if (!(window as unknown as { debugMode: boolean }).debugMode) return;
    toast({
      title: "Hint Response",
      description: msgCodes[msgCode] ?? "",
      duration: 5000,
    });
    setResponse(msgCodes[msgCode] ?? "");
    setTimeout(() => {
      setResponse("");
    }, 2000);
  };

  const startInstance = async () => {
    setStatus("starting");
    const id = window.localStorage.getItem("challenge");
    const res = (
      await axios
        .post<{
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
        .catch((err) => {
          console.error(err);
          toast({
            title: "Error",
            description: "Failed to start instance",
            duration: 5000,
          });
          return { data: { msg_code: -1, ports: [] } };
        })
    ).data;
    showHintResponse(res.msg_code);
    if (res.msg_code === 3) {
      setPorts(res.ports);
      setStatus("on");
    }
  };

  const stopInstance = async () => {
    setStatus("stopping");
    const id = window.localStorage.getItem("challenge");
    const res = await axios
      .post<{
        msg_code: number;
      }>(
        `${BACKEND_URL}/ctf/${id}/stop`,
        {},
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        },
      )
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to stop instance",
          duration: 5000,
        });
        return { data: { msg_code: -1 } };
      });
    showHintResponse(res.data.msg_code);
    if (res.data.msg_code === 4 || res.data.msg_code === 6) {
      setPorts([]);
      setStatus("off");
    }
  };

  const killAll = async () => {
    setStatus("stopping");
    const res = await axios
      .post<{
        msg_code: number;
      }>(
        BACKEND_URL + "/ctf/stopall",
        {},
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        },
      )
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to stop all instances",
          duration: 5000,
        });
        return { data: { msg_code: -1 } };
      });
    showHintResponse(res.data.msg_code);
    if (res.data.msg_code === 5) {
      setPorts([]);
      setStatus("off");
    }
  };

  const submitFlag = async () => {
    setSubmiting(true);
    const id = window.localStorage.getItem("challenge");
    const res = await axios
      .post<{
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
      )
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to submit flag",
          duration: 5000,
        });
        return { data: { status: false } };
      });
    if (!res.data.status) {
      setCorrect("Invalid flag!");
    }
    if (res.data.status) {
      setCorrect("Correct flag!");
    }
    setSubmiting(false);
  };

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Navbar notLanding />
      {loading && (
        <CgSpinner className="ml-12 animate-spin text-4xl text-white" />
      )}
      {!challenge && !loading && (
        <Text className="ml-12 text-4xl" variant="white">
          Challenge not found
        </Text>
      )}
      {challenge && (
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
                {challenge?.title.toUpperCase() ?? "Not Found"}
              </Text>
              <div className="flex flex-col gap-2">
                <Text className="text-lg" variant="white">
                  {challenge?.description.toUpperCase() ?? "Not Found"}
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

              <div className="flex gap-2">
                {status === "on" ? (
                  <Button className="w-1/2 min-w-fit" onClick={stopInstance}>
                    STOP INSTANCE
                  </Button>
                ) : (
                  <Button className="w-1/2 min-w-fit" onClick={startInstance}>
                    START INSTANCE
                  </Button>
                )}
                {(status === "starting" || status === "stopping") && (
                  <Text className="flex items-center justify-center">
                    <CgSpinner className="animate-spin text-2xl" />
                  </Text>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <Text className="ml-2 text-xl">{correct}</Text>
                <div className="flex items-center space-x-8">
                  <InputBox
                    className="rounded-2xl border-2 p-4"
                    variant="secondary"
                    placeholder="Flag"
                    onChange={(v) => setFlag(v.target.value)}
                  />
                  <Button
                    className="flex justify-center"
                    variant="secondary"
                    onClick={submitFlag}
                  >
                    {submiting ? (
                      <CgSpinner className="animate-spin text-2xl" />
                    ) : (
                      "SUBMIT"
                    )}
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
      )}
    </div>
  );
};

export default ChallengePage;
