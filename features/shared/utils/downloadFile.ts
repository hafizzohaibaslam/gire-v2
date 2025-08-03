import { Issue } from "@/features/admin/lib/types";

export const handleDownload = async (e: React.MouseEvent, issue: Issue) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    // For external URLs, we need to fetch the file first
    if (issue.paperUrl.startsWith("http")) {
      const response = await fetch(issue.paperUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${issue.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the object URL
      window.URL.revokeObjectURL(url);
    } else {
      // For relative URLs, use the direct download approach
      const link = document.createElement("a");
      link.href = issue.paperUrl;
      link.download = `${issue.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Error downloading file:", error);
    // Fallback: open in new tab if download fails
    window.open(issue.paperUrl, "_blank");
  }
};
