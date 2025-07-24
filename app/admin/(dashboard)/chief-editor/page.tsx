"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FileImageUpload from "@/features/admin/components/FileImageUpload";
import Form from "@/features/admin/components/Form";
import InputField from "@/features/admin/components/InputField";
import Button from "@/features/shared/components/Button";
import Label from "@/features/admin/components/Label";
import Textarea from "@/features/admin/components/Textarea";
import { useGetEditors } from "@/features/admin/chief-editor/hooks/useGetEditors";
import Skeleton from "@/features/shared/components/Skeleton";
import { toast } from "sonner";
import { Editor } from "@/features/admin/lib/types";
import { useGeneratePresignedUrl } from "@/features/shared/hooks/useGeneratePresignedUrl";
import { useUpdateEditor } from "@/features/admin/chief-editor/hooks/useUpdateEditor";

const initialProfile: Editor = {
  objId: "temp-id",
  name: "Asad Naeem",
  title: "Chief Editor",
  affiliation: "University of California, Los Angeles",
  bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  letter: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  imgUrl: "/about-us-page/person1.png",
  level: "chief",
};

const AdminChiefEditorPage = () => {
  const [activeTab, setActiveTab] = useState<"chief" | "co-chief">("chief");
  const [selectedEditor, setSelectedEditor] = useState<Editor>(initialProfile);
  const [image, setImage] = useState<File | null>();

  const { data: editors, isLoading, isError, error } = useGetEditors();
  const { mutateAsync: generatePresignedUrl, isPending: isGenerating } =
    useGeneratePresignedUrl();
  const { mutateAsync: updateEditor, isPending: isUpdating } =
    useUpdateEditor();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isGenerating || isUpdating) return;
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const response = await generatePresignedUrl({
      contentType: image.type,
      key: `${activeTab}/${image.name}`,
    });

    await updateEditor({
      ...selectedEditor,
      imgUrl: response.getUrl,
      objId: selectedEditor.objId,
      level: activeTab,
    });

    setImage(null);
  };

  useEffect(() => {
    setSelectedEditor(
      editors?.find((editor) => editor.level === activeTab) || initialProfile
    );
  }, [editors, activeTab]);

  if (isLoading) return <Skeleton />;
  if (isError)
    return (
      <div className="text-red-500 text-center text-[20px] font-bold">
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );

  return (
    <div className="bg-white px-[37px] py-[30px] rounded-[25px] h-full">
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value as "chief" | "co-chief");
        }}
        className="space-y-[30px] h-full overflow-y-auto"
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
                  image={image || null}
                  onChange={(file) => setImage(file)}
                  defaultImage={"/about-us-page/person1.png"}
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
                        value={selectedEditor?.name || ""}
                        onChange={(e) =>
                          setSelectedEditor((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
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
                        value={selectedEditor?.title || ""}
                        onChange={(e) =>
                          setSelectedEditor((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
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
                        value={selectedEditor?.affiliation || ""}
                        onChange={(e) =>
                          setSelectedEditor((prev) => ({
                            ...prev,
                            affiliation: e.target.value,
                          }))
                        }
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
                      value={selectedEditor?.bio || ""}
                      onChange={(e) =>
                        setSelectedEditor((prev) => ({
                          ...prev,
                          bio: e.target.value,
                        }))
                      }
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
                      value={selectedEditor?.letter || ""}
                      onChange={(e) =>
                        setSelectedEditor((prev) => ({
                          ...prev,
                          letter: e.target.value,
                        }))
                      }
                      className="text-black placeholder:text-black"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="self-end max-w-[200px]"
                  disabled={isGenerating || isUpdating}
                >
                  Update
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
    value: "chief",
  },
  {
    label: "Co-Chief Editor",
    value: "co-chief",
  },
];
