import React, { useState } from "react";
import InputBox from "../inputbox"; // Ensure correct path
import Text from "../text"; // Ensure correct path
import Button from "../button"; // Ensure correct path
import LinkButton from "../LinkButton"; // Ensure correct path

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
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
    <div className="flex max-w-lg flex-col items-center space-y-4">
      {/* Sign Up Header */}
      <Text className="text-4xl font-bold" variant="primary" glow="primary">
        SIGN UP
      </Text>

      {/* Sign Up Form */}
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Name Input */}
        <InputBox
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full"
          variant="secondary"
        />

        {/* Registration Number Input */}
        <InputBox
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="Registration Number"
          className="w-full"
          variant="secondary"
        />

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

        {/* Sign Up Button */}
        <Button className="" type="submit" variant="secondary">
          SIGN UP
        </Button>
      </form>

      {/* Sign In Link */}
      <div>
        <Text className="inline-block text-sm" variant="secondary">
          Already have an account?
        </Text>
        <LinkButton
          className="text-sm"
          variant="secondary"
          href="https://github.com"
        >
          SIGN IN
        </LinkButton>
      </div>
    </div>
  );
};

export default SignUpForm;
