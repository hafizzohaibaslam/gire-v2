"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FileImageUploadProps = {
  image: File | null;
  onChange: (file: File | null) => void;
  className?: string;
  imageClassName?: string;
  defaultImage: string;
};

function FileImageUpload({
  image,
  onChange,
  className,
  imageClassName,
  defaultImage,
}: FileImageUploadProps) {
  const [preview, setPreview] = useState<File | null>(image || null);
  const blobUrl = preview ? URL.createObjectURL(preview) : defaultImage;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("On Changed called");
    const file = e.target.files?.[0] || null;
    if (file) {
      setPreview(file);
      onChange(file || null);
    } else {
      setPreview(image);
      onChange(image || null);
    }
    e.target.value = "";
  };

  return (
    <div className={cn("self-start relative w-fit", className)}>
      <Image
        src={blobUrl || defaultImage}
        alt="Profile"
        width={100}
        height={100}
        className={cn(
          "rounded-full object-cover w-[132px] h-[130px] border border-gray-200",
          imageClassName
        )}
      />
      <label className="absolute bottom-2 -right-2 bg-blue-600 rounded-full p-2 cursor-pointer shadow-md">
        <input
          type="file"
          accept="application/pdf, image/jpg, image/png, video/mp4"
          className="hidden"
          onChange={handleFileChange}
        />
        <Pencil className="w-4 h-4 text-white" />
      </label>
    </div>
  );
}

export default FileImageUpload;
