"use client";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@/features/shared/components/Button";
import React, { useState, useRef, useEffect } from "react";
import IssueCard from "@/features/issues/components/IssueCard";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import { Issue } from "@/features/admin/lib/types";
import { File } from "lucide-react";
import { handleEdit } from "@/features/shared/utils/handleEdit";
import Skeleton from "@/features/shared/components/Skeleton";
import { handleDelete } from "@/features/shared/utils/handleDelete";
import { toast } from "sonner";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { useGenericDelete } from "@/features/shared/hooks/useGenericDelete";
import { useGenericCreate } from "@/features/shared/hooks/useGenericCreate";
import { useGenericUpdate } from "@/features/shared/hooks/useGenericUpdate";
import { useUploadToS3 } from "@/features/shared/hooks/useUploadToS3";
import { useGenericGet } from "@/features/shared/hooks/useGenericGet";

const URL = "/api/issues";
const AdminIssuesPage = () => {
  const editorRef = useRef<Editor>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<number>(1);
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  const [content, setContent] = useState<string>("");

  // Pagination
  const [paginatedItems, setPaginatedItems] = useState<Issue[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const SIZE = 6;

  const {
    data: allData,
    isLoading,
    isError,
  } = useGenericGet<Issue>({
    url: URL,
  });
  const { mutate: createIssue, isPending: isCreating } =
    useGenericCreate<Issue>({
      url: URL,
      msgKeyValue: "Issue",
    });
  const { mutate: updateIssue, isPending: isUpdating } =
    useGenericUpdate<Issue>({
      url: URL,
      msgKeyValue: "Issue",
    });
  const { mutate: deleteIssue, isPending: isDeleting } = useGenericDelete({
    url: URL,
    msgKeyValue: "Issue",
  });
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();
  const { mutateAsync: uploadToS3, isPending: isUploading } = useUploadToS3();

  const handleReset = () => {
    setSelectedIssue(null);
    setImage(null);
    setFileUpload(null);
    setContent("");
    setSelectedVolume(1);
    setSelectedNumber(1);
  };

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
    if (isCreating || isGenerating || isUploading || isDeleting) return;
    if (!fileUpload) {
      toast.error("Please upload a file");
      return;
    }

    const response = await generatePresignedUrl({
      contentType: fileUpload.type,
      key: `issues/${fileUpload.name}-${Date.now()}`,
    });

    await uploadToS3({ file: fileUpload, putUrl: response.putUrl });

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData) as unknown as Issue;

    // Ensure proper data types and only send required fields
    const requestData = {
      name: rawData.name,
      area: rawData.area,
      link: rawData.link,
      title: rawData.title,
      content: content,
      keyword: rawData.keyword,
      paperVolume: Number(selectedVolume),
      paperNumber: Number(selectedNumber),
      paperUrl: response.getUrl,
    };

    const isEditing = selectedIssue?.objId !== "";

    if (isEditing) {
      updateIssue({
        ...requestData,
        objId: selectedIssue?.objId || "",
      });
    } else {
      createIssue(requestData);
    }
    handleReset();
  };

  if (selectedIssue) {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] bg-white px-[37px] py-[30px] rounded-[25px] h-full overflow-y-auto"
      >
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
            {selectedIssue.objId ? "Edit Issue" : "Add New Issue"}
          </h1>
          <Button
            type="submit"
            disabled={isCreating || isGenerating || isUpdating || isUploading}
            className="max-w-[150px]"
          >
            {selectedIssue.objId ? "Update" : "Add"}
          </Button>
        </div>
        <div className="lg:max-w-[80%] space-y-[50px]">
          <div className="relative w-full max-w-[400px]">
            <FileImageUpload
              image={image}
              onChange={(file) => setImage(file)}
              defaultImage={"/issues-placeholder.png"}
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full space-y-[25px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
              {/* Volume */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="paperVolume">Paper Volume</Label>
                <InputField
                  type="number"
                  id="paperVolume"
                  name="paperVolume"
                  placeholder="Enter Volume"
                  value={selectedVolume}
                  onChange={(e) => setSelectedVolume(Number(e.target.value))}
                  className="text-black placeholder:text-black"
                />
              </div>

              {/* Number */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="paperNumber">Paper Number</Label>
                <InputField
                  type="number"
                  id="paperNumber"
                  name="paperNumber"
                  placeholder="Enter Number"
                  value={selectedNumber}
                  onChange={(e) => setSelectedNumber(Number(e.target.value))}
                  className="text-black placeholder:text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
              {/* Full Name */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="fullName">Full Name</Label>
                <InputField
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Enter Full Name"
                  defaultValue={selectedIssue?.name}
                  className="text-black placeholder:text-black"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="date">Date</Label>
                <InputField
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Enter Date"
                  defaultValue={selectedIssue?.date}
                  className="text-black placeholder:text-black"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="title">Title</Label>
              <InputField
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title"
                defaultValue={selectedIssue?.title}
                className="text-black placeholder:text-black"
              />
            </div>

            {/* Research Field */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="area">Area</Label>
              <InputField
                type="text"
                id="area"
                name="area"
                placeholder="Enter Area"
                defaultValue={selectedIssue?.area}
                className="text-black placeholder:text-black"
              />
            </div>

            {/* Research Keywords */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="researchKeywords">Research Keywords</Label>
              <InputField
                type="text"
                id="researchKeywords"
                name="keyword"
                placeholder="Enter Research Keywords"
                defaultValue={selectedIssue?.keyword}
                className="text-black placeholder:text-black"
              />
            </div>

            {/* Link */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="link">Link</Label>
              <InputField
                type="text"
                id="link"
                name="link"
                placeholder="Enter Link"
                defaultValue={selectedIssue?.link}
                className="text-black placeholder:text-black"
              />
            </div>

            {/* Rich Text Editor */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="content">Content</Label>
              <Editor
                value={content}
                onEditorChange={(content) => setContent(content)}
                onInit={(evt, editor) => (editorRef.current = editor)}
                apiKey="q072heva0y88u5qnrvbu37zyp1mreir3z868dt8iuxdy99if"
                init={{
                  height: 500,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => setFileUpload(e.target.files?.[0] || null)}
              />
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload PDF
              </Button>
              {fileUpload && (
                <div className="flex items-center gap-2">
                  <File className="w-4 h-4" />
                  <p className="text-[#718EBF] font-inter font-normal text-[15px]">
                    {fileUpload.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[37px] py-[15px] rounded-[25px] h-full">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
          Issues
        </h1>
        <Button
          className="max-w-[150px]"
          onClick={() => {
            setSelectedIssue({
              objId: "",
              name: "",
              date: "",
              area: "",
              link: "",
              title: "",
              keyword: "",
              paperUrl: "",
              paperVolume: 1,
              paperNumber: 1,
              content: "",
            });
          }}
        >
          Add new
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

      <div className="grid grid-cols-1 gap-x-[30px] gap-y-[16px] overflow-y-auto">
        {paginatedItems &&
          paginatedItems.length > 0 &&
          paginatedItems.map((topic, index) => (
            <IssueCard
              key={index}
              topic={topic}
              showEditBtn={true}
              showDeleteBtn={true}
              handleEdit={() =>
                handleEdit(
                  topic as Issue & { content: string },
                  setSelectedIssue
                )
              }
              handleDelete={() =>
                handleDelete(topic.objId, isDeleting, deleteIssue)
              }
            />
          ))}
        {!isLoading &&
          !isError &&
          paginatedItems &&
          paginatedItems.length === 0 && (
            <div className="text-[#858C95] text-[15px] font-normal leading-[22px]">
              No issues found
            </div>
          )}
        {hasMoreItems ? (
          <Button
            onClick={handleLoadMoreClick}
            className="max-w-[200px] mx-auto"
          >
            Load More
          </Button>
        ) : (
          <div className="text-[#52525B] text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] font-normal text-center">
            All issues have been loaded.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminIssuesPage;
