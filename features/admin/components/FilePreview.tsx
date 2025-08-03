import React from "react";
import { File, X, Eye, FileText } from "lucide-react";
import Button from "@/features/shared/components/Button";

interface FilePreviewProps {
  file: File | null;
  existingUrl?: string;
  onRemove?: () => void;
  className?: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  existingUrl,
  onRemove,
  className = "",
}) => {
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (["pdf"].includes(extension || "")) {
      return <FileText className="w-6 h-6 text-blue-500" />;
    }
    return <File className="w-6 h-6 text-gray-500" />;
  };

  const handlePreview = () => {
    if (existingUrl) {
      window.open(existingUrl, "_blank");
    }
  };

  if (!file && !existingUrl) {
    return null;
  }

  const displayFile = file || { name: "Uploaded File" };

  return (
    <div
      className={`bg-gray-50 border border-gray-200 rounded-lg p-3 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getFileIcon(displayFile.name)}
          <div>
            <p className="text-sm font-medium text-gray-900">
              {file ? file.name : "Uploaded File"}
            </p>
            {existingUrl && (
              <p className="text-xs text-gray-500 truncate max-w-[200px]">
                {existingUrl}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 min-w-[100px]">
          {existingUrl && (
            <Button
              type="button"
              variant="secondary"
              onClick={handlePreview}
              className="flex items-center gap-1 text-xs w-full"
            >
              <Eye className="w-3 h-3" />
              Preview
            </Button>
          )}

          {onRemove && (
            <Button
              type="button"
              onClick={onRemove}
              className="flex items-center gap-1 text-xs"
            >
              <X className="w-6 h-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
