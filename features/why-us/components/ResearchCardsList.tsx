import React from "react";
import ResearchCard from "./ResearchCard";
import { researchCards } from "../utils/researchCards";

const ResearchCardsList = () => {
  return (
    <div className="space-y-[20px]">
      {/* 1st Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        {researchCards.slice(0, 3).map((card) => (
          <ResearchCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            className="max-w-xs"
          />
        ))}
      </div>
      {/* 2nd Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        {researchCards.slice(3, 5).map((card) => (
          <ResearchCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchCardsList;
