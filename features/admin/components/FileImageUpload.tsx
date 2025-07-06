"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FileImageUploadProps = {
  image: string;
  onChange: (url: string) => void;
  className?: string;
  imageClassName?: string;
};

function FileImageUpload({
  image,
  onChange,
  className,
  imageClassName,
}: FileImageUploadProps) {
  const [preview, setPreview] = useState<string>(image);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setPreview("/about-us-page/university.png");
      onChange("/about-us-page/university.png");
    }
  };

  return (
    <div className={cn("self-start relative w-fit", className)}>
      <Image
        src={preview}
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
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Pencil className="w-4 h-4 text-white" />
      </label>
    </div>
  );
}

export default FileImageUpload;
