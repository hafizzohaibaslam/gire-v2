import AuthorGuidelines from "../components/AuthorGuidelines";
import Templates from "../components/Templates";
import ReviewProcess from "../components/ReviewProcess";

export type TabHeader = {
  label: string;
  value: string;
  component: React.ReactNode;
};

export const tabHeaders: TabHeader[] = [
  {
    label: "Author Guidelines",
    value: "author-guidelines",
    component: <AuthorGuidelines />,
  },
  {
    label: "Templates",
    value: "templates",
    component: <Templates />,
  },
  {
    label: "Review Process",
    value: "review-process",
    component: <ReviewProcess />,
  },
];
