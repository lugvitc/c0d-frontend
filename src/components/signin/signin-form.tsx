"use client";
import React, { useState } from "react";
import InputBox from "../inputbox"; // Ensure correct path
import Text from "../text"; // Ensure correct path
import Button from "../button"; // Ensure correct path
import LinkButton from "../LinkButton"; // Ensure correct path
import { cn } from "~/lib/utils";

interface SignInFormProps {
  className?: string;
}

const SignInForm = ({ className }: SignInFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, validation, etc.)
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className={cn("flex max-w-lg flex-col items-center space-y-4", className)}>
      {/* Sign In Header */}
      <Text className="text-4xl font-bold" variant="primary" glow="primary">
        SIGN IN
      </Text>

      {/* Sign Up Form */}
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Email Address Input */}
        <InputBox
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full"
          variant="secondary"
        />

        {/* Password Input */}
        <InputBox
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
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
        <LinkButton
          className="text-sm"
          variant="secondary"
          href="/signup"
        >
          SIGN UP
        </LinkButton>
      </div>
    </div>
  );
};

export default SignInForm;
