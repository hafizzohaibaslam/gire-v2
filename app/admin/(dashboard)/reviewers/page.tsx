"use client";

import React, { useState } from "react";
import EditorialTeamCard from "@/features/about-us/components/ReviewersCard";
import EditModal from "@/features/admin/components/EditModal";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import Button from "@/features/shared/components/Button";
import { Reviewer } from "@/features/admin/lib/types";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { toast } from "sonner";
import { handleDelete } from "@/features/shared/utils/handleDelete";
import { handleEdit } from "@/features/shared/utils/handleEdit";
import Skeleton from "@/features/shared/components/Skeleton";
import { useGenericPagination } from "@/features/shared/hooks/useGenericPagination";
import LoadMoreBtn from "@/features/shared/components/LoadMoreBtn";
import { useGenericDelete } from "@/features/shared/hooks/useGenericDelete";
import { useGenericCreate } from "@/features/shared/hooks/useGenericCreate";
import { useGenericUpdate } from "@/features/shared/hooks/useGenericUpdate";

const URL = "/api/reviewers";
const AdminReviewersPage = () => {
  const [selectedReviewer, setSelectedReviewer] = useState<Reviewer | null>(
    null
  );
  const [image, setImage] = useState<File | null>(null);
  const {
    allData,
    handleAddToAllData,
    handleUpdateInAllData,
    handleDeleteFromAllData,
    offsetObjId,
    isLoading,
    isError,
    isLoadingMore,
    isMoreDataAvailable,
    handleLoadMoreBtnClick,
  } = useGenericPagination<Reviewer>({ url: URL });

  const { mutate: createReviewer, isPending: isCreating } =
    useGenericCreate<Reviewer>({
      url: URL,
      msgKeyValue: "Reviewer",
      handleAddToAllData,
    });
  const { mutate: deleteReviewer, isPending: isDeleting } = useGenericDelete({
    url: URL,
    msgKeyValue: "Reviewer",
    handleDeleteFromAllData,
  });
  const { mutate: updateReviewer, isPending: isUpdating } =
    useGenericUpdate<Reviewer>({
      url: URL,
      msgKeyValue: "Reviewer",
      handleUpdateInAllData,
    });
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating || isUpdating || isGenerating || isDeleting) return;
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const response = await generatePresignedUrl({
      contentType: image.type,
      key: `reviewers/${image.name}-${Date.now()}`,
    });

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData) as unknown as Reviewer;
    rawData.imgUrl = response.getUrl;

    const isEditing = selectedReviewer?.objId !== "";

    if (isEditing) {
      updateReviewer({
        ...rawData,
        objId: selectedReviewer?.objId || "",
      });
    } else {
      createReviewer(rawData);
    }
    setSelectedReviewer(null);
    setImage(null);
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[37px] py-[30px] rounded-[25px] overflow-y-auto h-full">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
          Reviewers
        </h1>
        <Button
          className="max-w-[150px]"
          onClick={() =>
            setSelectedReviewer({
              objId: "",
              imgUrl: "/about-us-page/person1.png",
              name: "",
              department: "",
              role: "",
            })
          }
        >
          Add New
        </Button>
      </div>

      {!offsetObjId && isLoading && (
        <div className="mt-[60px]">
          <Skeleton />
        </div>
      )}

      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[16px] overflow-y-auto">
        {allData.length > 0 ? (
          allData.map((reviewer, index) => (
            <EditorialTeamCard
              key={index}
              reviewer={reviewer}
              showEditBtn={true}
              handleEdit={() => handleEdit(reviewer, setSelectedReviewer)}
              showDeleteBtn={true}
              handleDelete={() =>
                handleDelete(reviewer.objId, isDeleting, deleteReviewer)
              }
            />
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No reviewers found
          </div>
        )}
      </div>

      {allData && allData.length > 0 && (
        <div className="mt-[40px] text-center">
          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}
          {isMoreDataAvailable ? (
            <LoadMoreBtn
              isLoadingMore={isLoadingMore}
              handleClick={() =>
                handleLoadMoreBtnClick(allData[allData.length - 1].objId)
              }
            />
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              All reviewers have been loaded.
            </p>
          )}
        </div>
      )}

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
                image={image}
                onChange={(file) => setImage(file)}
                defaultImage={"/about-us-page/person1.png"}
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
                      name="name"
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
                    id="role"
                    name="role"
                    placeholder="Enter Editorial Role"
                    defaultValue={selectedReviewer?.role}
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="self-end max-w-[200px]"
                disabled={isCreating || isUpdating || isDeleting}
              >
                {selectedReviewer?.objId ? "Update" : "Add"}
              </Button>
            </div>
          </Form>
        </EditModal>
      )}
    </div>
  );
};

export default AdminReviewersPage;
