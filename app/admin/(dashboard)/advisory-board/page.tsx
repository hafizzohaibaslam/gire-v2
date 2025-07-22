"use client";
import React, { useState } from "react";
import AdvisoryBoardCard from "@/features/about-us/components/AdvisoryBoardCard";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Button from "@/features/shared/components/Button";
import EditModal from "@/features/admin/components/EditModal";
import { AdvisoryBoard } from "@/features/admin/lib/types";
import { useGetAdvisoryBoards } from "@/features/admin/advisory-board/hooks/useGetAdvisoryBoards";
import Skeleton from "@/features/admin/advisory-board/components/Skeleton";
import { useCreateAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useCreateAdvisoryBoard";
import { useDeleteAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useDeleteAdvisoryBoard";
import { useUpdateAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useUpdateAdvisoryBoard";

const AdminAdvisoryBoard = () => {
  const {
    data: advisoryBoards,
    isLoading,
    isError,
    error,
  } = useGetAdvisoryBoards();
  const [selectedAdvisoryBoard, setSelectedAdvisoryBoard] =
    useState<AdvisoryBoard | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const { mutate: createAdvisoryBoard, isPending: isCreating } =
    useCreateAdvisoryBoard();
  const { mutate: deleteAdvisoryBoard, isPending: isDeleting } =
    useDeleteAdvisoryBoard();
  const { mutate: updateAdvisoryBoard, isPending: isUpdating } =
    useUpdateAdvisoryBoard();

  const handleEdit = (board: AdvisoryBoard) => {
    setSelectedAdvisoryBoard(board);
  };

  const handleDelete = (objId: string) => {
    console.log("ObjId", objId);
    if (isDeleting) return; // Prevent multiple clicks
    if (
      window.confirm(`Are you sure you want to delete this advisory board?`)
    ) {
      deleteAdvisoryBoard(objId);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEditing = selectedAdvisoryBoard?.objId !== "";

    if (isEditing) {
      updateAdvisoryBoard(selectedAdvisoryBoard as unknown as AdvisoryBoard);
    } else {
      const formData = new FormData(e.target as HTMLFormElement);
      const rawData = Object.fromEntries(formData) as unknown as AdvisoryBoard;
      rawData.imgUrl = imgUrl || "/about-us-page/university.png";

      createAdvisoryBoard(rawData);
    }
    setSelectedAdvisoryBoard(null);
  };

  if (isLoading) return <Skeleton />;
  if (isError)
    return (
      <div className="text-red-500 text-center text-[20px] font-bold">
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );

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
              objId: "",
              name: "",
              title: "",
              department: "",
              affiliation: "",
              field: "",
              imgUrl: "/about-us-page/university.png",
            })
          }
        >
          Add New
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        {advisoryBoards?.map((board) => (
          <AdvisoryBoardCard
            key={board.objId}
            board={board}
            showEditBtn={true}
            handleEdit={() => handleEdit(board)}
            showDeleteBtn={true}
            handleDelete={() => handleDelete(board.objId)}
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
                imgUrl={selectedAdvisoryBoard?.imgUrl || ""}
                onChange={(url) => setImgUrl(url)}
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
              <Button
                type="submit"
                className="self-end max-w-[200px]"
                disabled={isCreating || isUpdating || isDeleting}
              >
                {selectedAdvisoryBoard?.objId ? "Update" : "Add"}
              </Button>
            </div>
          </Form>
        </EditModal>
      )}
    </div>
  );
};

export default AdminAdvisoryBoard;
