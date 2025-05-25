import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const OurProcess = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}
    >
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            className="text-[#393939] font-bold text-[16px] uppercase"
            // sx={{
            //   fontSize: "16px",
            //   fontWeight: "bold",
            //   textAlign: "start",
            // }}
          >
            Step {step.number}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: step.color,
              }}
            />
            <TimelineConnector
              sx={{
                width: "3px",
                background: `linear-gradient(90deg, ${step.color}, ${step.color}33)`, // 20% opacity of step.color
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div className="relative -top-[10px] flex flex-col lg:flex-row justify-start items-start gap-2">
              {/* Circle */}
              <div className="relative w-12 h-12 mr-[10px]">
                {/* Gradient ring with shadow */}
                <div
                  className="absolute inset-0 rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}66, ${step.color})`,
                  }}
                >
                  {/* White inner circle */}
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative z-10">
                    <span className="text-sm font-semibold text-gray-800">
                      {step.number}
                    </span>
                  </div>
                </div>
                {/* Left notch diamond shape */}
                <div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rotate-45 shadow-md rounded-sm"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}66, ${step.color})`,
                  }}
                ></div>
              </div>
              {/* <div className="h-fit w-fit rounded-full bg-[#061C3D] p-4"></div> */}
              <div>
                <h1 className="font-playfair-display font-semibold text-[24px] mb-[25px]">
                  {step.title}
                </h1>
                {step.sections.map((section, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr]"
                  >
                    <h3 className="font-figtree font-bold text-[16px] leading-[24px] text-[#061C3D]">
                      {section.subtitle}
                    </h3>
                    <p className="font-figree font-normal text-[16px] leading-[24px] text-[#061C3D]">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default OurProcess;

const steps = [
  {
    number: "01",
    title: "Preparation (Before You Submit)",
    color: "#EF4444",
    sections: [
      {
        subtitle: "Read the Author Guidelines",
        text: "Confirm topic relevance, word count (2000–3000 words), formatting (Vancouver Style), and file types (DOC, DOCX).",
      },
      {
        subtitle: "Choose a Cover",
        text: "Run a plagiarism scan (≤10% similarity) and confirm the work hasn't been published elsewhere.",
      },
      {
        subtitle: "Compose a Cover Letter",
        text: "Run a plagiarism scan (≤10% similarity) and confirm the work hasn't been published elsewhere.",
      },
    ],
  },
  {
    number: "02",
    title: "Submission",
    color: "#F97316",
    sections: [
      {
        subtitle: "Online Submission Form",
        text: "Enter author details, title, abstract (≤250 words), keywords (3–5), and select your research category.",
      },
      {
        subtitle: "Upload Files",
        text: "Manuscript, figures/tables (separate .jpg, .jpeg files), and any supplementary material (e.g., data sets).",
      },
      {
        subtitle: "Confirmation Email",
        text: "You'll receive an automatic receipt with a unique manuscript ID within 24 hours.",
      },
    ],
  },
  {
    number: "03",
    title: "Initial Editorial Screening (1–2 Weeks)",
    color: "#EAB308",
    sections: [
      {
        subtitle: "Scope Check",
        text: "Editor assesses whether your topic fits the journal's mission.",
      },
      {
        subtitle: "Technical Check",
        text: "Confirm adherence to formatting, word limits, and ethical policies (e.g., human subjects consent).",
      },
      {
        subtitle: "Desk Decision",
        text: `Manuscripts either proceed to peer review or receive a ${"'revise and resubmit'"} or ${"'decline'"} decision with feedback.`,
      },
    ],
  },
  {
    number: "04",
    title: "Peer Review (4–6 Weeks)",
    color: "#22C55E",
    sections: [
      {
        subtitle: "Reviewer Assignment",
        text: "Two independent reviewers evaluate originality, methodology, clarity, and significance.",
      },
      {
        subtitle: "Blind Review",
        text: "Author and reviewer identities remain anonymous to ensure impartiality.",
      },
      {
        subtitle: "Reviewer Reports",
        text: "Detailed comments, scores (Accept / Minor Revision / Major Revision / Reject), and recommendations are compiled by the editor.",
      },
    ],
  },
  {
    number: "05",
    title: "Revision (2–4 Weeks)",
    color: "#14B8A6",
    sections: [
      {
        subtitle: "Editor Check",
        text: "Ensure revisions satisfy reviewer concerns.",
      },
      {
        subtitle: "Response Letter",
        text: "Submit a point-by-point table showing how each reviewer comment was addressed (or politely justify why not).",
      },
      {
        subtitle: "Resubmission",
        text: "Upload revised manuscript and response letter via the submission portal.",
      },
    ],
  },
  {
    number: "06",
    title: "Final Editorial Review & Copyediting (1–2 Weeks)",
    color: "#6366F1",
    sections: [
      {
        subtitle: "Editor Check",
        text: "Ensure revisions satisfy reviewer concerns.",
      },
      {
        subtitle: "Response Letter",
        text: "Submit a point-by-point table showing how each reviewer comment was addressed (or politely justify why not).",
      },
      {
        subtitle: "Resubmission",
        text: "Upload revised manuscript and response letter via the submission portal.",
      },
    ],
  },
  {
    number: "07",
    title: "Publication",
    color: "#A855F7",
    sections: [
      {
        subtitle: "Revise Thoroughly",
        text: "Address every comment; add explanations, new data, or clarifications as needed.",
      },
      {
        subtitle: "Response Letter",
        text: "Submit a point-by-point table showing how each reviewer comment was addressed (or politely justify why not).",
      },
      {
        subtitle: "Resubmission",
        text: "Upload revised manuscript and response letter via the submission portal.",
      },
    ],
  },
];
