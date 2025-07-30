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
import Skeleton from "@/features/shared/components/Skeleton";
import { toast } from "sonner";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { handleDelete } from "@/features/shared/utils/handleDelete";
import { handleEdit } from "@/features/shared/utils/handleEdit";
import { useUploadToS3 } from "@/features/shared/hooks/useUploadToS3";
import { useGenericDelete } from "@/features/shared/hooks/useGenericDelete";
import { useGenericCreate } from "@/features/shared/hooks/useGenericCreate";
import { useGenericUpdate } from "@/features/shared/hooks/useGenericUpdate";
import { useGenericGet } from "@/features/shared/hooks/useGenericGet";

const URL = "/api/advisories";
const AdminAdvisoryBoard = () => {
  const [selectedAdvisoryBoard, setSelectedAdvisoryBoard] =
    useState<AdvisoryBoard | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [paginatedItems, setPaginatedItems] = useState<AdvisoryBoard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const SIZE = 6;

  const {
    data: allData,
    isLoading,
    isError,
  } = useGenericGet<AdvisoryBoard>({
    url: URL,
  });
  const { mutate: createAdvisoryBoard, isPending: isCreating } =
    useGenericCreate<AdvisoryBoard>({
      url: URL,
      msgKeyValue: "Advisory Board",
    });
  const { mutate: deleteAdvisoryBoard, isPending: isDeleting } =
    useGenericDelete({
      url: URL,
      msgKeyValue: "Advisory Board",
    });
  const { mutate: updateAdvisoryBoard, isPending: isUpdating } =
    useGenericUpdate<AdvisoryBoard>({
      url: URL,
      msgKeyValue: "Advisory Board",
    });
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();
  const { mutateAsync: uploadToS3, isPending: isUploading } = useUploadToS3();

  const hasMoreItems = allData ? paginatedItems.length < allData.length : false;
  const handleLoadMoreClick = () => {
    const startIndex = currentPage * SIZE;
    const endIndex = startIndex + SIZE;
    const newItems = allData?.slice(startIndex, endIndex) || [];
    setPaginatedItems([...paginatedItems, ...newItems]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (allData) {
      setPaginatedItems(allData.slice(0, SIZE));
    }
  }, [allData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreating || isUpdating || isGenerating || isUploading || isDeleting)
      return;
    const isEditing = selectedAdvisoryBoard?.objId !== "";

    if (!isEditing && !image) {
      toast.error("Please upload an image for the new advisory board member");
      return;
    }

    let response;
    if (image) {
      response = await generatePresignedUrl({
        contentType: image.type,
        key: `advisory-board/${image.name}-${Date.now()}`,
      });
      await uploadToS3({ file: image, putUrl: response.putUrl });
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData) as unknown as AdvisoryBoard;

    if (isEditing) {
      rawData.imgUrl = image
        ? (response?.getUrl as string)
        : (selectedAdvisoryBoard?.imgUrl as string);
    } else {
      rawData.imgUrl = (response?.getUrl as string) || "";
    }

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

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[15px] rounded-[25px] h-full">
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

      {isLoading && (
        <div className="mt-[40px] text-center">
          <div className="mt-[60px]">
            <Skeleton />
          </div>
        </div>
      )}

      {!isLoading && isError && (
        <div className="mt-[60px] text-center text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] font-normal max-w-4xl mx-auto">
          Error loading advisory boards
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] overflow-y-auto">
        {paginatedItems &&
          paginatedItems.length > 0 &&
          paginatedItems.map((board) => (
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
          ))}
        {!isLoading &&
          !isError &&
          paginatedItems &&
          paginatedItems.length === 0 && (
            <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
              No advisory boards found
            </div>
          )}
      </div>
      {hasMoreItems ? (
        <Button onClick={handleLoadMoreClick} className="max-w-[200px] mx-auto">
          Load More
        </Button>
      ) : (
        <div className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal text-center">
          All advisory boards have been loaded.
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
            <div className="relative w-full max-w-[150px]">
              <FileImageUpload
                image={image}
                onChange={(file) => setImage(file)}
                defaultImage={"/image-placeholder.svg"}
                existingImageUrl={
                  selectedAdvisoryBoard?.objId
                    ? selectedAdvisoryBoard.imgUrl
                    : undefined
                }
                className="w-full rounded-md"
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
                disabled={isCreating || isUpdating || isDeleting || isUploading}
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
