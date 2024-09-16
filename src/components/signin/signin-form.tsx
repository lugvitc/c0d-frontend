"use client";
import React, { useEffect, useState } from "react";
import InputBox from "../inputbox"; // Ensure correct path
import Text from "../text"; // Ensure correct path
import Button from "../button"; // Ensure correct path
import LinkButton from "../LinkButton"; // Ensure correct path
import { cn } from "~/lib/utils";
import { BACKEND_URL } from "~/lib/constants";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { useToast } from "../hooks/use-toast";

interface SignInFormProps {
  className?: string;
}

const SignInForm = ({ className }: SignInFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
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

    if (!formData.name || !formData.password) return;

    setSubmitting(true);
    const res = (
      await axios
        .post(`${BACKEND_URL}/auth/login`, {
          name: formData.name,
          password: formData.password,
        })
        .catch((err) => {
          console.error(err);
          toast({
            title: "Error",
            description: "Failed to sign in",
            duration: 5000,
          });
          setSubmitting(false);
          return { data: { access_token: "" } };
        })
    ).data as { access_token: string };

    setSubmitting(false);

    if (res.access_token) {
      window.localStorage.setItem("token", res.access_token);
      window.location.href = "/signin";
    }
  };

  return (
    <div
      className={cn(
        "flex max-w-lg flex-col items-center space-y-4 rounded-lg bg-[#00000095] p-8 py-12",
        className,
      )}
    >
      {/* Sign In Header */}
      <Text className="text-4xl font-bold" variant="primary" glow="primary">
        SIGN IN
      </Text>

      {/* Sign Up Form */}
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Email Address Input */}
        <InputBox
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Team Name"
          className="w-full"
          variant="secondary"
        />

        {/* Password Input */}
        <InputBox
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Team Password"
          className="w-full"
          variant="secondary"
        />

        {/* Sign In Button */}
        <Button
          className="flex justify-center text-white"
          type="submit"
          variant="secondary"
        >
          {submitting ? <CgSpinner className="animate-spin" /> : "SIGN IN"}
        </Button>
      </form>

      {/* Sign Up Link */}
      <div>
        <Text className="inline-block text-sm" variant="secondary">
          Don&rsquo;t have an account?
        </Text>
        <LinkButton className="text-sm" variant="secondary" href="/signup">
          SIGN UP
        </LinkButton>
      </div>
    </div>
  );
};

export default SignInForm;
