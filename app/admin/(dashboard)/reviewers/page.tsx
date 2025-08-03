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
import { useGenericDelete } from "@/features/shared/hooks/useGenericDelete";
import { useGenericCreate } from "@/features/shared/hooks/useGenericCreate";
import { useGenericUpdate } from "@/features/shared/hooks/useGenericUpdate";
import { useUploadToS3 } from "@/features/shared/hooks/useUploadToS3";
import { useClientPagination } from "@/features/shared/hooks/useClientPagination";

const URL = "/api/reviewers";
const AdminReviewersPage = () => {
  const [selectedReviewer, setSelectedReviewer] = useState<Reviewer | null>(
    null
  );
  const [image, setImage] = useState<File | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);

  // Pagination
  const {
    paginatedItems,
    hasMoreItems,
    handleLoadMoreClick,
    isLoading,
    isError,
  } = useClientPagination<Reviewer>({
    url: URL,
  });

  const { mutate: createReviewer, isPending: isCreating } =
    useGenericCreate<Reviewer>({
      url: URL,
      msgKeyValue: "Reviewer",
    });
  const { mutate: deleteReviewer, isPending: isDeleting } = useGenericDelete({
    url: URL,
    msgKeyValue: "Reviewer",
  });
  const { mutate: updateReviewer, isPending: isUpdating } =
    useGenericUpdate<Reviewer>({
      url: URL,
      msgKeyValue: "Reviewer",
    });
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();
  const { mutateAsync: uploadToS3, isPending: isUploading } = useUploadToS3();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating || isUpdating || isGenerating || isUploading || isDeleting)
      return;
    const isEditing = selectedReviewer?.objId !== "";

    if (!isEditing && !image) {
      toast.error("Please upload an image for the new reviewer");
      return;
    }

    setIsImageUploading(true);
    let response;
    if (image) {
      response = await generatePresignedUrl({
        contentType: image.type,
        key: `reviewers/${image.name}-${Date.now()}`,
      });
      await uploadToS3({ file: image, putUrl: response.putUrl });
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData) as unknown as Reviewer;

    if (isEditing) {
      rawData.imgUrl = image
        ? (response?.getUrl as string)
        : (selectedReviewer?.imgUrl as string);
    } else {
      rawData.imgUrl = (response?.getUrl as string) || "";
    }

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
    setIsImageUploading(false);
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[37px] py-[15px] rounded-[25px] overflow-y-auto h-full">
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

      {isLoading && <Skeleton />}
      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[16px] overflow-y-auto">
        {paginatedItems &&
          paginatedItems.length > 0 &&
          paginatedItems.map((reviewer, index) => (
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
          ))}
        {!isLoading &&
          !isError &&
          paginatedItems &&
          paginatedItems.length === 0 && (
            <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
              No reviewers found
            </div>
          )}
      </div>

      {hasMoreItems ? (
        <Button onClick={handleLoadMoreClick} className="max-w-[200px] mx-auto">
          Load More
        </Button>
      ) : (
        <div className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal text-center">
          All reviewers have been loaded.
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
            <div className="relative w-full max-w-[150px]">
              <FileImageUpload
                image={image}
                onChange={(file) => setImage(file)}
                defaultImage={"/image-placeholder.svg"}
                existingImageUrl={
                  selectedReviewer?.objId ? selectedReviewer.imgUrl : undefined
                }
                className="w-full rounded-md"
                isLoading={isImageUploading}
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
                      required
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
                      required
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
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="self-end max-w-[200px]"
                disabled={isCreating || isUpdating || isDeleting || isUploading}
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
