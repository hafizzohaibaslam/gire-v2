"use client";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@/features/shared/components/Button";
import React, { useState, useRef } from "react";
import { trendingTopics } from "@/features/issues/utils/trendingTopics";
import TrendingTopicCard from "@/features/issues/components/TrendingTopicCard";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import InputField from "@/features/admin/components/InputField";
import Label from "@/features/admin/components/Label";
import { MultiSelect } from "@/features/admin/components/MultiSelect";
import { categoriesList } from "@/features/issues/utils/trendingTopics";
import { TrendingTopic } from "@/features/admin/lib/types";
import { File } from "lucide-react";

const AdminIssuesPage = () => {
  const editorRef = useRef<Editor>(null);
  const [pdfUpload, setPdfUpload] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedIssue, setSelectedIssue] = useState<TrendingTopic | null>(
    null
  );
  const [imageUpload, setImageUpload] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleEdit = (issue: TrendingTopic) => {
    setSelectedIssue(issue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    data.image = imageUpload;
    setSelectedIssue(null);
    setImageUpload("");
  };

  if (selectedIssue) {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] bg-white px-[37px] py-[30px] rounded-[25px]"
      >
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
            {selectedIssue.id ? "Edit Issue" : "Add New Issue"}
          </h1>
          <Button type="submit" className="max-w-[150px]">
            {selectedIssue.id ? "Update" : "Add"}
          </Button>
        </div>
        <div className="lg:max-w-[80%] space-y-[50px]">
          <div className="w-full">
            <FileImageUpload
              image={selectedIssue.image}
              onChange={(url) => setImageUpload(url)}
              className="w-full max-w-[400px]"
              imageClassName="w-full h-full rounded-xs"
            />
          </div>
          <div className="w-full space-y-[25px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
              {/* Full Name */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="volume">Volume</Label>
                <InputField
                  type="number"
                  id="volume"
                  name="volume"
                  placeholder="Enter Volume"
                  defaultValue={"1"}
                  className="text-black placeholder:text-black"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-[11px] w-full">
                <Label htmlFor="number">Number</Label>
                <InputField
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter Number"
                  defaultValue={"1"}
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
                  name="fullName"
                  placeholder="Enter Full Name"
                  defaultValue={selectedIssue?.author}
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

            {/* Tags */}
            <MultiSelect.Root
              options={categoriesList}
              selectedOptions={selectedTags}
              onChange={setSelectedTags}
            >
              <MultiSelect.Label htmlFor="tags">Tags</MultiSelect.Label>
              <MultiSelect.Trigger
                placeholder="Select tags..."
                className="border-[1px] border-[#DFEAF2] rounded-[15px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#718EBF] font-inter font-normal text-[15px] placeholder:text-[#718EBF]"
              />
              <MultiSelect.Content>
                <MultiSelect.Search placeholder="Search tags..." />
                <MultiSelect.Actions />
                <MultiSelect.Options />
              </MultiSelect.Content>
              <MultiSelect.Count />
            </MultiSelect.Root>

            {/* Link */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="link">Link</Label>
              <InputField
                type="text"
                id="link"
                name="link"
                placeholder="Enter Link"
                defaultValue={selectedIssue?.doi}
                className="text-black placeholder:text-black"
              />
            </div>

            {/* Rich Text Editor */}
            <div className="flex flex-col gap-[11px] w-full">
              <Label htmlFor="content">Content</Label>
              <Editor
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
                onChange={(e) => setPdfUpload(e.target.files?.[0]?.name || "")}
              />
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload PDF
              </Button>
              {pdfUpload && (
                <div className="flex items-center gap-2">
                  <File className="w-4 h-4" />
                  <p className="text-[#718EBF] font-inter font-normal text-[15px]">
                    {pdfUpload}
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
    <div className="flex flex-col gap-[20px] bg-white px-[37px] py-[30px] rounded-[25px]">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-inter font-semibold text-[28px] text-[#343C6A]">
          Issues
        </h1>
        <Button
          className="max-w-[150px]"
          onClick={() => {
            setSelectedIssue({
              id: "",
              image: "/issues-page/card1.svg",
              author: "",
              date: "",
              title: "",
              tags: [],
              doi: "",
            });
          }}
        >
          Add new
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-x-[30px] gap-y-[16px] max-h-[72vh] overflow-y-auto">
        {trendingTopics.map((topic, index) => (
          <TrendingTopicCard
            key={index}
            topic={topic}
            showEditButton={true}
            handleEdit={() => handleEdit(topic)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminIssuesPage;
