"use client";
import React, { useState } from "react";
import AdvisoryBoardCard from "@/features/about-us/components/AdvisoryBoardCard";
import { advisoryBoardData } from "@/features/shared/utils/advisoryBoardData";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Button from "@/features/shared/components/Button";
import EditModal from "@/features/admin/components/EditModal";
import { AdvisoryBoard } from "@/features/admin/lib/types";

const AdminAdvisoryBoard = () => {
  const [advisoryBoards, setAdvisoryBoards] =
    useState<AdvisoryBoard[]>(advisoryBoardData);
  const [selectedAdvisoryBoard, setSelectedAdvisoryBoard] =
    useState<AdvisoryBoard | null>(null);
  const [imageUpload, setImageUpload] = useState<string | null>(null);

  const handleEdit = (board: AdvisoryBoard) => {
    setSelectedAdvisoryBoard(board);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEditing = selectedAdvisoryBoard?.id !== "";
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("image", imageUpload || "");
    const rawData = Object.fromEntries(formData) as unknown as AdvisoryBoard;

    if (isEditing) {
      setAdvisoryBoards((prev) => {
        const updatedBoards = prev.map((board) =>
          board.id === selectedAdvisoryBoard?.id
            ? {
                ...board,
                ...rawData,
                image: imageUpload || "/about-us-page/university.png",
              }
            : board
        );
        return updatedBoards;
      });
    } else {
      setAdvisoryBoards((prev) => [
        ...prev,
        {
          ...rawData,
          id: (prev.length + 1).toString(),
          image: imageUpload || "/about-us-page/university.png",
        },
      ]);
    }
    setSelectedAdvisoryBoard(null);
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[37px] rounded-[25px]">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
          Advisory Board
        </h1>
        <Button
          className="max-w-[150px]"
          onClick={() =>
            setSelectedAdvisoryBoard({
              id: "",
              name: "",
              title: "",
              department: "",
              affiliation: "",
              field: "",
              image: "/about-us-page/university.png",
            })
          }
        >
          Add New
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        {advisoryBoards.map((board) => (
          <AdvisoryBoardCard
            key={board.id}
            board={board}
            handleEdit={() => handleEdit(board)}
          />
        ))}
      </div>

      {selectedAdvisoryBoard && (
        <EditModal
          title="Advisory Board Details"
          onClose={() => setSelectedAdvisoryBoard(null)}
        >
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-[30px] w-full mt-[30px]"
          >
            {/* File Upload */}
            <div className="relative">
              <FileImageUpload
                image={selectedAdvisoryBoard?.image || ""}
                onChange={(url) => setImageUpload(url)}
              />
            </div>
            <div className="w-full flex flex-col gap-[30px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
                {/* Name */}
                <div className="flex flex-col gap-[11px] w-full">
                  <Label htmlFor="name">Name</Label>
                  <InputField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    defaultValue={selectedAdvisoryBoard?.name}
                    className="text-black placeholder:text-black"
                  />
                </div>
                {/* Title */}
                <div className="flex flex-col gap-[11px] w-full">
                  <Label htmlFor="title">Title</Label>
                  <InputField
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter Title"
                    defaultValue={selectedAdvisoryBoard?.title}
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
                    defaultValue={selectedAdvisoryBoard?.department}
                    className="text-black placeholder:text-black"
                  />
                </div>
                {/* Affiliation */}
                <div className="flex flex-col gap-[11px] w-full">
                  <Label htmlFor="affiliation">Affiliation</Label>
                  <InputField
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    placeholder="Enter Affiliation"
                    defaultValue={selectedAdvisoryBoard?.affiliation}
                    className="text-black placeholder:text-black"
                  />
                </div>
                {/* Field */}
                <div className="flex flex-col gap-[11px] w-full">
                  <Label htmlFor="field">Field</Label>
                  <InputField
                    type="text"
                    id="field"
                    name="field"
                    placeholder="Enter Field"
                    defaultValue={selectedAdvisoryBoard?.field}
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>
              <Button type="submit" className="self-end max-w-[200px]">
                {selectedAdvisoryBoard?.id ? "Update" : "Add"}
              </Button>
            </div>
          </Form>
        </EditModal>
      )}
    </div>
  );
};

export default AdminAdvisoryBoard;
