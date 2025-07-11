"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Button from "@/features/shared/components/Button";
import Label from "@/features/admin/components/Label";
import Textarea from "@/features/admin/components/Textarea";

const initialProfile = {
  name: "John Doe",
  title: "Chief Editor",
  affiliation: "University of California, Los Angeles",
  email: "charlenereed@gmail.com",
  phone: "02994 29494",
  linkedin: "",
  bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  letter: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: "/about-us-page/person1.png",
};

const AdminChiefEditorPage = () => {
  const [activeTab, setActiveTab] = useState("chief-editor");
  const [chiefEditor] = useState(initialProfile);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white px-[37px] py-[30px] rounded-[25px]">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-[50px]"
      >
        <TabsList className="flex gap-[50px] border-b-[1px] border-[#E0E0E0]">
          {tabsData.map((tab) => {
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="cursor-pointer font-inter font-medium text-[16px] text-[#718EBF] data-[state=active]:text-[#3385FF] data-[state=active]:border-b-2 data-[state=active]:border-[#3385FF] rounded-none px-2 py-[8px]"
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="w-full">
          <TabsContent value={activeTab}>
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row gap-[30px] w-full mt-[30px]"
            >
              {/* File Upload */}
              <div className="relative">
                <FileImageUpload
                  image={chiefEditor?.image || ""}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full flex flex-col gap-[30px]">
                <div className="w-full space-y-[25px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
                    {/* Name */}
                    <div className="flex flex-col gap-[11px] w-full">
                      <Label htmlFor="name">Name</Label>
                      <InputField
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        defaultValue={chiefEditor?.name}
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
                        defaultValue={chiefEditor?.title}
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
                        defaultValue={chiefEditor?.affiliation}
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={5}
                      placeholder="Enter Bio"
                      defaultValue={chiefEditor?.bio}
                      className="text-black placeholder:text-black"
                    />
                  </div>
                  {/* Letter */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <Label htmlFor="letter">Letter</Label>
                    <Textarea
                      id="letter"
                      name="letter"
                      rows={5}
                      placeholder="Enter Letter"
                      defaultValue={chiefEditor?.letter}
                      className="text-black placeholder:text-black"
                    />
                  </div>
                </div>

                <Button type="submit" className="self-end max-w-[200px]">
                  {activeTab === "chief-editor" ? "Update" : "Add"}
                </Button>
              </div>
            </Form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminChiefEditorPage;

const tabsData = [
  {
    label: "Chief Editor",
    value: "chief-editor",
  },
  {
    label: "Co-Chief Editor",
    value: "co-chief-editor",
  },
];
