"use client";
import IssueDetails from "@/features/open-issues/components/IssueDetails";
import Footer from "@/features/shared/components/Footer";
import HeroSection from "@/features/shared/components/HeroSection";
import { useParams } from "next/navigation";
import React from "react";
import { useGetIssuesDetails } from "@/features/shared/hooks/useGetIssuesDetails";
import { Issue } from "@/features/admin/lib/types";
import Skeleton from "../../../features/open-issues/components/Skeleton";

const OpenIssuesPage = () => {
  const { id } = useParams();
  const decodedId = id ? decodeURIComponent(id as string) : "";

  const { data: issue, isLoading, isError } = useGetIssuesDetails(decodedId);

  const formatTitle = (issue: Issue) => {
    const year = issue.date
      ? new Date(issue.date).getFullYear()
      : new Date().getFullYear();
    const volume = issue.paperVolume || 1;
    const number = issue.paperNumber || 1;
    return `${year}, Vol. ${volume}, No. ${number}`;
  };

  if (isError) return <div>Error loading issue</div>;

  return (
    <>
      <HeroSection.Root
        backgroundImage="issues-open-page/background-img.png"
        className="pb-[300px]"
      >
        <HeroSection.Title>
          {issue ? formatTitle(issue) : "Loading..."}
        </HeroSection.Title>
      </HeroSection.Root>
      {isLoading && (
        <div className="mt-[30px]">
          <Skeleton />
        </div>
      )}
      {issue && <IssueDetails issue={issue} />}
      <Footer />
    </>
  );
};

export default OpenIssuesPage;
