import GeneralFormattingRequirements from "../components/GeneralFormattingRequirements";
import ManuscriptStructureFormat from "../components/ManuscriptStructureFormat";
import TablesFigures from "../components/TablesFigures";
import References from "../components/References";
import SubmissionChecklist from "../components/SubmissionChecklist";
import OpenAccessPolicy from "../components/open-access-policy/OpenAccessPolicy";
import CriteriaForSelectionOfManuscripts from "../components/open-access-policy/CriteriaForSelectionOfManuscripts";
import ReviewPolicy from "../components/open-access-policy/ReviewPolicy";
import RecordKeepingAndResearchPolicy from "../components/open-access-policy/RecordKeepingAndResearchPolicy";
import TrademarksAndServiceMarksPolicy from "../components/open-access-policy/TrademarksAndServiceMarksPolicy";
import CopyrightNotice from "../components/open-access-policy/CopyrightNotice";
import PrivacyPolicy from "../components/open-access-policy/PrivacyPolicy";

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

export const publishingPolicyAccordianData: AccordianData[] = [
  {
    id: "open-access-policy",
    question: "Open Access Policy",
    content: <OpenAccessPolicy />,
  },
  {
    id: "criteria-for-selection-of-manuscripts",
    question: "Criteria for Selection of Manuscripts",
    content: <CriteriaForSelectionOfManuscripts />,
  },
  {
    id: "review-policy",
    question: "Review Policy",
    content: <ReviewPolicy />,
  },
  {
    id: "record-keeping-and-research-policy",
    question: "Record Keeping and Research Policy",
    content: <RecordKeepingAndResearchPolicy />,
  },
  {
    id: "trademarks-and-service-marks-policy",
    question: "Trademarks and Service Marks Policy",
    content: <TrademarksAndServiceMarksPolicy />,
  },
  {
    id: "copyright-notice",
    question: "Copyright Notice",
    content: <CopyrightNotice />,
  },
  {
    id: "privacy-policy",
    question: "Privacy Policy",
    content: <PrivacyPolicy />,
  },
];
