import React from "react";
import PublishDetails from "./PublishDetails";
import ResearchInHighSchool from "./ResearchInHighSchool";
import ResearchCardsList from "./ResearchCardsList";

const ReadersTabsContent = () => {
  return (
    <div className="space-y-[50px]">
      <PublishDetails />
      <ResearchInHighSchool />
      <ResearchCardsList />
    </div>
  );
};

export default ReadersTabsContent;
