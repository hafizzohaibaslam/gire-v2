"use client";

import EditorialTeamCard from "@/features/about-us/components/ReviewersCard";
import EditModal from "@/features/admin/components/EditModal";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import Button from "@/features/shared/components/Button";
import React, { useEffect, useState } from "react";
import { Reviewer } from "@/features/admin/lib/types";
import { useGetReviewers } from "@/features/admin/reviewers/hooks/useGetReviewers";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { useDeleteReviewer } from "@/features/admin/reviewers/hooks/useDeleteReviewer";
import { useUpdateReviewer } from "@/features/admin/reviewers/hooks/useUpdateReviewer";
import { useCreateReviewer } from "@/features/admin/reviewers/hooks/useCreateReviewer";
import { toast } from "sonner";
import { handleDelete } from "@/features/shared/utils/handleDelete";
import { handleEdit } from "@/features/shared/utils/handleEdit";
import Skeleton from "@/features/shared/components/Skeleton";

const AdminReviewersPage = () => {
  const [selectedReviewer, setSelectedReviewer] = useState<Reviewer | null>(
    null
  );
  const [image, setImage] = useState<File | null>(null);

  const [allReviewers, setAllReviewers] = useState<Reviewer[]>([]);
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 6;

  const {
    data: reviewers,
    isLoading,
    isError,
    error,
  } = useGetReviewers({
    size: SIZE,
    offsetObjId,
  });

  const { mutate: createReviewer, isPending: isCreating } = useCreateReviewer();
  const { mutate: deleteReviewer, isPending: isDeleting } = useDeleteReviewer();
  const { mutate: updateReviewer, isPending: isUpdating } = useUpdateReviewer();
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();

  useEffect(() => {
    if (reviewers && reviewers?.length > 0) {
      setAllReviewers((prev) => [...prev, ...reviewers]);

      // If we received fewer items than requested, there's no more data
      if (reviewers.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (reviewers && reviewers.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [reviewers]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating || isUpdating || isGenerating) return;
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

  if (isLoading) return <Skeleton />;
  if (isError)
    return (
      <div className="text-red-500 text-center text-[20px] font-bold">
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );

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

      {isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[16px] overflow-y-auto">
        {allReviewers.length > 0 ? (
          allReviewers.map((reviewer, index) => (
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

      {allReviewers && allReviewers.length > 0 && (
        <div className="mt-[40px] text-center">
          {isLoading && (
            <div className="mt-[60px]">
              <Skeleton />
            </div>
          )}
          {isMoreDataAvailable ? (
            <Button
              disabled={isLoadingMore}
              onClick={() => {
                setOffsetObjId(allReviewers[allReviewers.length - 1].objId);
                setIsLoadingMore(true);
              }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </Button>
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
