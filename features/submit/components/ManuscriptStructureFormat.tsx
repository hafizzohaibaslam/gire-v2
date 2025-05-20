import React from "react";

const ManuscriptStructureFormat = () => {
  return (
    <div className="font-figtree text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-normal text-[#6F6C90]">
      {/* Title Page */}
      <div>
        <h4>
          1. Title Page <span>(TEMPLATE)</span>
        </h4>
        <ul className="list-disc list-inside">
          <li>
            Title: Concise (≤110 characters, including spaces), descriptive,
            sentence‑case.
          </li>
          <li>
            Author names: First name, middle initial(s), last name; superscript
            numerals linking each author to their affiliation.
          </li>
          <li>
            Affiliations: Institution name, city, state (or country if
            non‑U.S.). List each affiliation on its own line, preceded by its
            superscript numeral.
          </li>
          <li>
            Corresponding author: Full name, institutional mailing address,
            telephone number (with country code), and email.
          </li>
          <li>
            Running head: ≤50 characters (appears in header of subsequent
            pages).
          </li>
        </ul>
      </div>
      {/* Abstract */}
      <div>
        <h4>1. Abstract</h4>
        <ul className="list-disc list-inside">
          <li>200 - 250 words</li>
          <li>Structure (single paragraph)</li>
        </ul>
      </div>

      {/* Group  */}
      <div>
        <ol className="list-decimal list-inside">
          <li>Background (1–2 sentences): Why the study matters</li>
          <li>Objective: Clear statement of research question or hypothesis</li>
          <li>Methods: Study design, sample size, key techniques</li>
          <li>
            Results: Principal quantitative findings (include effect sizes,
            confidence intervals)
          </li>
          <li>Conclusions: Main take‑home message and broader implications</li>
        </ol>
        <ul className="list-disc list-inside">
          <li>Formatting: No citations, abbreviations defined on first use.</li>
        </ul>
      </div>

      {/* Key words */}
      <div>
        <h4>1. Keywords</h4>
        <ul className="list-disc list-inside">
          <li>3-5 terms</li>
          <li>Lowercase, comma-separated</li>
          <li>
            Select terms not already in the title; use standardized vocabulary
            (e.g., MeSH for biomedical topics).
          </li>
        </ul>
      </div>

      {/* Introduction */}
      <div>
        <h4>1. Introduction</h4>
        <ul className="list-disc list-inside">
          <li>300-400 words</li>
          <li>
            Context & significance: Summarize relevant literature (3–5
            citations)
          </li>
          <li>Knowledge gap: Identify what is unknown or unresolved</li>
          <li>
            Purpose/hypothesis: Explicit statement of your research question and
            hypothesis
          </li>
          <li>No subheadings; write as a cohesive narrative.</li>
        </ul>
      </div>

      {/* Methods */}
      <div>
        <h4>1. Methods</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>
            Study design: Type (e.g., randomized trial, observational cohort)
          </li>
          <li>
            Participants/materials: Inclusion/exclusion criteria; recruitment
            setting
          </li>
          <li>
            Procedures: Step‑by‑step description of protocols, instruments,
            reagents
          </li>
          <li>
            Data analysis: Statistical tests, software (include version),
            significance threshold
          </li>
          <li>
            Ethical approval: IRB protocol number and consent procedures (if
            applicable)
          </li>
        </ul>
      </div>

      {/* Results */}
      <div>
        <h4>1. Results</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>
            Presentation: Text first; reference each figure/table by number
            (e.g., “Figure 1 shows…”).
          </li>
          <li>
            Data reporting: Provide summary statistics (means ± SD, medians
            [IQR], p‑values).
          </li>
          <li>No interpretation—save that for Discussion.</li>
          <li>Limit figures/tables to a maximum of 5 total.</li>
        </ul>
      </div>

      {/* Discussion */}
      <div>
        <h4>1. Discussion</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>Interpretation: Explain findings relative to your hypothesis</li>
          <li>Comparison: Contrast with prior studies</li>
          <li>
            Limitations: Acknowledge potential biases and generalizability
            issues
          </li>
          <li>Implications: Practical or theoretical significance</li>
          <li>
            Future directions: Specific next steps or unanswered questions
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <div>
        <h4>1. Conclusion</h4>
        <ul className="list-disc list-inside">
          <li>100-150 references</li>
          <li>
            One succinct paragraph summarizing your core finding and its broader
            impact.
          </li>
        </ul>
      </div>

      {/* Acknowledgements */}
      <div>
        <h4>1. Acknowledgements</h4>
        <ul className="list-disc list-inside">
          <li>Funding sources (grant numbers)</li>
          <li>
            Non‑author contributions (technical assistance, manuscript review)
          </li>
          <li>Conflict of interest disclosures</li>
        </ul>
      </div>
    </div>
  );
};

export default ManuscriptStructureFormat;
