import GeneralFormattingRequirements from "../components/GeneralFormattingRequirements";
import ManuscriptStructureFormat from "../components/ManuscriptStructureFormat";
import TablesFigures from "../components/TablesFigures";
import References from "../components/References";
import SubmissionChecklist from "../components/SubmissionChecklist";

export type AccordianData = {
  id: string;
  question: string;
  content: React.ReactNode;
};

export const authorGuidelinesAccordianData: AccordianData[] = [
  {
    id: "general-formatting-requirements",
    question: "General Formatting Requirements",
    content: <GeneralFormattingRequirements />,
  },
  {
    id: "manuscript-structure-content",
    question: "Manuscript Structure & Content",
    content: <ManuscriptStructureFormat />,
  },
  {
    id: "tables-figures",
    question: "Tables & Figures",
    content: <TablesFigures />,
  },
  {
    id: "references",
    question: "References",
    content: <References />,
  },
  {
    id: "submission-checklist",
    question: "Submission Checklist",
    content: <SubmissionChecklist />,
  },
];
