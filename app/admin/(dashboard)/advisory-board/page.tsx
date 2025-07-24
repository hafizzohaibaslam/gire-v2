"use client";
import React, { useEffect, useState } from "react";
import AdvisoryBoardCard from "@/features/about-us/components/AdvisoryBoardCard";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Button from "@/features/shared/components/Button";
import EditModal from "@/features/admin/components/EditModal";
import { AdvisoryBoard } from "@/features/admin/lib/types";
import { useGetAdvisoryBoards } from "@/features/admin/advisory-board/hooks/useGetAdvisoryBoards";
import Skeleton from "@/features/shared/components/Skeleton";
import { useCreateAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useCreateAdvisoryBoard";
import { useDeleteAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useDeleteAdvisoryBoard";
import { useUpdateAdvisoryBoard } from "@/features/admin/advisory-board/hooks/useUpdateAdvisoryBoard";
import { toast } from "sonner";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { handleDelete } from "@/features/shared/utils/handleDelete";
import { handleEdit } from "@/features/shared/utils/handleEdit";
import { useUploadToS3 } from "@/features/shared/hooks/useUploadToS3";

const AdminAdvisoryBoard = () => {
  const [selectedAdvisoryBoard, setSelectedAdvisoryBoard] =
    useState<AdvisoryBoard | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const [allAdvisoryBoards, setAllAdvisoryBoards] = useState<AdvisoryBoard[]>(
    []
  );
  const [offsetObjId, setOffsetObjId] = useState<string>("");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [isMoreDataAvailable, setIsMoreDataAvailable] = useState<boolean>(true);
  const SIZE = 6;

  const {
    data: advisoryBoards,
    isLoading,
    isError,
    error,
  } = useGetAdvisoryBoards({
    size: SIZE,
    offsetObjId,
  });

  const { mutate: createAdvisoryBoard, isPending: isCreating } =
    useCreateAdvisoryBoard();
  const { mutate: deleteAdvisoryBoard, isPending: isDeleting } =
    useDeleteAdvisoryBoard();
  const { mutate: updateAdvisoryBoard, isPending: isUpdating } =
    useUpdateAdvisoryBoard();
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();
  const { mutateAsync: uploadToS3, isPending: isUploading } = useUploadToS3();

  useEffect(() => {
    if (advisoryBoards && advisoryBoards?.length > 0) {
      setAllAdvisoryBoards((prev) => [...prev, ...advisoryBoards]);

      // If we received fewer items than requested, there's no more data
      if (advisoryBoards.length < SIZE) {
        setIsMoreDataAvailable(false);
      }
    } else if (advisoryBoards && advisoryBoards.length === 0) {
      // If we received an empty array, there's no more data
      setIsMoreDataAvailable(false);
    }
    setIsLoadingMore(false);
  }, [advisoryBoards]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating || isUpdating || isGenerating || isUploading) return;
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const response = await generatePresignedUrl({
      contentType: image.type,
      key: `advisory-board/${image.name}`,
    });

    await uploadToS3({ file: image, putUrl: response.putUrl });

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData) as unknown as AdvisoryBoard;
    rawData.imgUrl = response.getUrl;

    const isEditing = selectedAdvisoryBoard?.objId !== "";

    if (isEditing) {
      updateAdvisoryBoard({
        ...rawData,
        objId: selectedAdvisoryBoard?.objId || "",
      });
    } else {
      createAdvisoryBoard(rawData);
    }
    setSelectedAdvisoryBoard(null);
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
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[37px] rounded-[25px] h-full">
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

      {isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] overflow-y-auto">
        {allAdvisoryBoards.length > 0 ? (
          allAdvisoryBoards.map((board) => (
            <AdvisoryBoardCard
              key={board.objId}
              board={board}
              showEditBtn={true}
              handleEdit={() => handleEdit(board, setSelectedAdvisoryBoard)}
              showDeleteBtn={true}
              handleDelete={() =>
                handleDelete(board.objId, isDeleting, deleteAdvisoryBoard)
              }
            />
          ))
        ) : (
          <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
            No advisory boards found
          </div>
        )}
      </div>

      {allAdvisoryBoards && allAdvisoryBoards.length > 0 && (
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
                setOffsetObjId(
                  allAdvisoryBoards[allAdvisoryBoards.length - 1].objId
                );
                setIsLoadingMore(true);
              }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </Button>
          ) : (
            <p className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal">
              All advisory board members have been loaded.
            </p>
          )}
        </div>
      )}

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
                image={image}
                onChange={(file) => setImage(file)}
                defaultImage={"/about-us-page/university.png"}
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
