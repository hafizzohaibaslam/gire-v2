import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const SubmitTabs = () => {
  return (
    <Tabs defaultValue="author-guidelines" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="author-guidelines">Author Guidelines</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
        <TabsTrigger value="review-process">Review Process</TabsTrigger>
      </TabsList>
      <TabsContent value="author-guidelines">
        <div>
          <h1>Author Guidelines</h1>
        </div>
      </TabsContent>
      <TabsContent value="templates">
        <div>
          <h1>Templates</h1>
        </div>
      </TabsContent>
      <TabsContent value="review-process">
        <div>
          <h1>Review Process</h1>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SubmitTabs;
