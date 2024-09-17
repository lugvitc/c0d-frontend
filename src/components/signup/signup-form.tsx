"use client";
import React, { useEffect, useState } from "react";
import InputBox from "../inputbox";
import Text from "../text";
import Button from "../button";
import { cn } from "~/lib/utils";
import { BACKEND_URL } from "~/lib/constants";
import LinkButton from "../LinkButton";
import axios from "axios";
import { BiMinus } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { useToast } from "../hooks/use-toast";

interface SignUpFormProps {
  className?: string;
}

interface SignUpData {
  teamName: string;
  password: string;
  teamLeadRegNo: string;
  teamMember2RegNo: string;
  teamMember3RegNo: string;
  count: number;
}

const SignUpForm = ({ className }: SignUpFormProps) => {
  const [formData, setFormData] = useState<SignUpData>({
    teamName: "",
    password: "",
    teamLeadRegNo: "",
    teamMember2RegNo: "",
    teamMember3RegNo: "",
    count: 0,
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      window.location.href = "/challenges";
      toast({
        title: "Redirecting",
        description: "You are signed in",
        duration: 5000,
      });
    }
  }, [toast]);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tags = [];

    if (formData.teamLeadRegNo) tags.push(formData.teamLeadRegNo);
    if (formData.teamMember2RegNo && formData.count > 0)
      tags.push(formData.teamMember2RegNo);
    if (formData.teamMember3RegNo && formData.count > 1)
      tags.push(formData.teamMember3RegNo);

    if (!formData.teamName || !formData.password || tags.length < 1) return;

    setSubmitting(true);
    const res = (
      await axios
        .post(`${BACKEND_URL}/auth/signup`, {
          name: formData.teamName,
          password: formData.password,
          tags,
        })
        .catch((err) => {
          console.error(err);
          toast({
            title: "Error",
            description: "Failed to sign up",
            duration: 5000,
          });
          setSubmitting(false);
          return { data: { access_token: "", msg_code: -1 } };
        })
    ).data as { access_token: string, msg_code: number };
    setSubmitting(false);

    if (res.access_token) {
      window.localStorage.setItem("token", res.access_token);
      window.location.href = "/signup";
    }

    if (res.msg_code === 13) {
      window.location.href = "/signin?reg=true";
    }
  };

  const handleAdd = () => {
    if (formData.count >= 2) return;

    setFormData((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  const handleRemove = () => {
    if (formData.count <= 0) return;

    setFormData((prev) => ({ ...prev, count: prev.count - 1 }));
  };

  return (
    <div
      className={cn(
        "flex max-w-lg flex-col items-center space-y-4 rounded-lg bg-[#00000095] p-8 py-12",
        className,
      )}
    >
      <Text className="text-4xl font-bold" variant="primary" glow="primary">
        SIGNUP
      </Text>

      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        <InputBox
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          placeholder="Team Name"
          className="w-full"
          variant="secondary"
        />

        <InputBox
          name="password"
          type="password"
          minLength={8}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full"
          variant="secondary"
        />

        <InputBox
          name="teamLeadRegNo"
          value={formData.teamLeadRegNo}
          onChange={handleChange}
          placeholder="Team Lead Reg Number"
          className="w-full"
          variant="secondary"
        />

        {formData.count > 0 && (
          <InputBox
            name={"teamMember2RegNo"}
            value={formData.teamMember2RegNo}
            onChange={handleChange}
            placeholder={`Team Member 2 Reg Number`}
            className="w-full"
            variant="secondary"
          />
        )}

        {formData.count > 1 && (
          <InputBox
            name={"teamMember3RegNo"}
            value={formData.teamMember3RegNo}
            onChange={handleChange}
            placeholder={`Team Member 3 Reg Number`}
            className="w-full"
            variant="secondary"
          />
        )}

        <div className="flex gap-2">
          <Button
            className="flex-grow text-white"
            variant="secondary"
            type="button"
            onClick={handleAdd}
          >
            Add Member
          </Button>
          <Button
            className="text-white"
            variant="secondary"
            type="button"
            onClick={handleRemove}
          >
            <BiMinus />
          </Button>
        </div>

        <Button
          className="flex justify-center text-white"
          type="submit"
          variant="secondary"
        >
          {submitting ? <CgSpinner className="animate-spin" /> : "Create Team"}
        </Button>
        <div>
          <Text className="inline-block text-sm" variant="secondary">
            Already have an account?
          </Text>
          <LinkButton className="text-sm" variant="secondary" href="/signin">
            SIGN IN
          </LinkButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
