"use client";
import React, { useState } from "react";
import InputBox from "../inputbox";
import Text from "../text";
import Button from "../button";
import { cn } from "~/lib/utils";

interface CreateTeamFormProps {
  className?: string;
}

interface FormData {
  teamName: string;
  teamLeadRegNo: string;
  teamMember2RegNo: string;
  teamMember3RegNo: string;
  count: number;
}

const CreateTeamForm = ({ className }: CreateTeamFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    teamLeadRegNo: "",
    teamMember2RegNo: "",
    teamMember3RegNo: "",
    count: 0,
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

  const handleAdd = () => {
    if (formData.count >= 2) return;

    setFormData((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <div
      className={cn("flex max-w-lg flex-col items-center space-y-4", className)}
    >
      <Text className="text-4xl font-bold" variant="primary" glow="primary">
        CREATE A TEAM
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

        <Button
          className="text-white"
          type="submit"
          variant="secondary"
          onClick={handleAdd}
        >
          Add Member
        </Button>

        <Button className="text-white" type="submit" variant="secondary">
          Create Team
        </Button>
      </form>
    </div>
  );
};

export default CreateTeamForm;
