"use client";

import EditorialTeamCard, {
  EditorialTeamCardProps,
} from "@/features/about-us/components/ReviewersCard";
import EditModal from "@/features/admin/components/EditModal";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import Button from "@/features/shared/components/Button";
import { editorialTeamData } from "@/features/shared/utils/editorialTeamData";
import React, { useState } from "react";

const AdminReviewersPage = () => {
  const [reviewers, setReviewers] =
    useState<EditorialTeamCardProps[]>(editorialTeamData);
  const [selectedReviewer, setSelectedReviewer] =
    useState<EditorialTeamCardProps | null>(null);
  const [imageUpload, setImageUpload] = useState<string>("");

  const handleEdit = (reviewer: EditorialTeamCardProps) => {
    setSelectedReviewer(reviewer);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData);
    rawData.image = imageUpload || "";

    setReviewers((prev) => {
      const updatedReviewers = prev.map((reviewer) =>
        reviewer.name === selectedReviewer?.name
          ? {
              ...reviewer,
              ...rawData,
              image: imageUpload || "/about-us-page/university.png",
            }
          : reviewer
      );
      return updatedReviewers;
    });
    setSelectedReviewer(null);
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[37px] py-[30px] rounded-[25px]">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
          Reviewers
        </h1>
        <Button className="max-w-[150px]">Add New</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[16px]">
        {reviewers.map((reviewer, index) => (
          <EditorialTeamCard
            key={index}
            {...reviewer}
            showEditButton={true}
            handleEdit={() => handleEdit(reviewer)}
          />
        ))}
      </div>

      {selectedReviewer && (
        <EditModal
          title="Reviewer Details"
          onClose={() => setSelectedReviewer(null)}
        >
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-[30px] w-full mt-[30px]"
          >
            {/* File Upload */}
            <div className="relative">
              <FileImageUpload
                image={selectedReviewer?.image || ""}
                onChange={(url) => setImageUpload(url)}
              />
            </div>
            <div className="w-full flex flex-col gap-[30px]">
              <div className="w-full space-y-[25px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
                  {/* Full Name */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <Label htmlFor="fullName">Full Name</Label>
                    <InputField
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter Full Name"
                      defaultValue={selectedReviewer?.name}
                      className="text-black placeholder:text-black"
                    />
                  </div>
                  {/* Department */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <Label htmlFor="department">Department</Label>
                    <InputField
                      type="text"
                      id="department"
                      name="department"
                      placeholder="Enter Department"
                      defaultValue={selectedReviewer?.department}
                      className="text-black placeholder:text-black"
                    />
                  </div>
                </div>
                {/* Editorial Role */}
                <div className="flex flex-col gap-[11px] w-full">
                  <Label htmlFor="editorialRole">Editorial Role</Label>
                  <InputField
                    type="text"
                    id="editorialRole"
                    name="editorialRole"
                    placeholder="Enter Editorial Role"
                    defaultValue={selectedReviewer?.position}
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>
              <Button type="submit" className="self-end max-w-[200px]">
                Update
              </Button>
            </div>
          </Form>
        </EditModal>
      )}
    </div>
  );
};

export default AdminReviewersPage;
