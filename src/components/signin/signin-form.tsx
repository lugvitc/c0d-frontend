"use client";
import React, { useEffect, useState } from "react";
import InputBox from "../inputbox"; // Ensure correct path
import Text from "../text"; // Ensure correct path
import Button from "../button"; // Ensure correct path
import LinkButton from "../LinkButton"; // Ensure correct path
import { cn } from "~/lib/utils";
import { BACKEND_URL } from "~/lib/constants";
import axios from "axios";

interface SignInFormProps {
  className?: string;
}

const SignInForm = ({ className }: SignInFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/challenges";
    }
  }, []);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.password) return;

    const res = (await axios.post(`${BACKEND_URL}/auth/login`, {
      name: formData.name,
      password: formData.password,
    })).data as { access_token: string };

    localStorage.setItem("token", res.access_token);
    window.location.href = "/signin";
  };

  return (
    <div
      className={cn("flex max-w-lg flex-col items-center space-y-4", className)}
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
        <Button className="" type="submit" variant="secondary">
          SIGN IN
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
