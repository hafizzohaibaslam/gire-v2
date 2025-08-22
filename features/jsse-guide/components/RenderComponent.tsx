"use client";

import { TabHeader } from "../utils/tabHeaders";

interface RenderComponentProps {
  tabValues: TabHeader[];
  activeTab: string;
}

const RenderComponent = ({ tabValues, activeTab }: RenderComponentProps) => {
  const tab = tabValues.find((tab) => tab.value === activeTab);
  return <>{tab?.component}</>;
};

export default RenderComponent;
