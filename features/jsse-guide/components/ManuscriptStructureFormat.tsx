import React from "react";

const ManuscriptStructureFormat = () => {
  return (
    <div className="font-figtree text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] space-y-[30px] font-normal text-[#6F6C90]">
      {/* Title Page */}
      <div>
        <h4 className="font-bold">
          1. Title Page <span>(TEMPLATE)</span>
        </h4>
        <ul className="list-disc list-inside">
          <li>
            <strong>Title:</strong> Concise (≤110 characters, including spaces),
            descriptive, sentence‑case.
          </li>
          <li>
            <strong>Author names:</strong> First name, middle initial(s), last
            name; superscript numerals linking each author to their affiliation.
          </li>
          <li>
            <strong>Affiliations:</strong> Institution name, city, state (or
            country if non‑U.S.). List each affiliation on its own line,
            preceded by its superscript numeral.
          </li>
          <li>
            <strong>Corresponding author:</strong> Full name, institutional
            mailing address, telephone number (with country code), and email.
          </li>
          <li>
            <strong>Running head:</strong> ≤50 characters (appears in header of
            subsequent pages).
          </li>
        </ul>
      </div>
      {/* Abstract */}
      <div>
        <h4 className="font-bold">2. Abstract</h4>
        <ul className="list-disc list-inside">
          <li>200 - 250 words</li>
          <li>Structure (single paragraph)</li>
        </ul>
      </div>
      {/* Group  */}
      <div>
        <ol className="list-decimal list-inside">
          <li>
            <strong>Background (1–2 sentences):</strong> Why the study matters
          </li>
          <li>
            <strong>Objective:</strong> Clear statement of research question or
            hypothesis
          </li>
          <li>
            <strong>Methods:</strong> Study design, sample size, key techniques
          </li>
          <li>
            <strong>Results:</strong> Principal quantitative findings (include
            effect sizes, confidence intervals)
          </li>
          <li>
            <strong>Conclusions:</strong> Main take‑home message and broader
            implications
          </li>
        </ol>
        <ul className="list-disc list-inside">
          <li>
            <strong>Formatting:</strong> No citations, abbreviations defined on
            first use.
          </li>
        </ul>
      </div>
      {/* Key words */}
      <div>
        <h4 className="font-bold">3. Keywords</h4>
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
        <h4 className="font-bold">4. Introduction</h4>
        <ul className="list-disc list-inside">
          <li>300-400 words</li>
          <li>
            <strong>Context & significance:</strong> Summarize relevant
            literature (3–5 citations)
          </li>
          <li>
            <strong>Knowledge gap:</strong> Identify what is unknown or
            unresolved
          </li>
          <li>
            <strong>Purpose/hypothesis:</strong> Explicit statement of your
            research question and hypothesis
          </li>
          <li>
            <strong>No subheadings; write as a cohesive narrative.</strong>
          </li>
        </ul>
      </div>
      {/* Methods */}
      <div>
        <h4 className="font-bold">5. Methods</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>
            <strong>Study design:</strong> Type (e.g., randomized trial,
            observational cohort)
          </li>
          <li>
            <strong>Participants/materials:</strong> Inclusion/exclusion
            criteria; recruitment setting
          </li>
          <li>
            <strong>Procedures:</strong> Step‑by‑step description of protocols,
            instruments, reagents
          </li>
          <li>
            <strong>Data analysis:</strong> Statistical tests, software (include
            version), significance threshold
          </li>
          <li>
            <strong>Ethical approval:</strong> IRB protocol number and consent
            procedures (if applicable)
          </li>
        </ul>
      </div>
      {/* Results */}
      <div>
        <h4 className="font-bold">6. Results</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>
            <strong>Presentation:</strong> Text first; reference each
            figure/table by number (e.g., “Figure 1 shows…”).
          </li>
          <li>
            <strong>Data reporting:</strong> Provide summary statistics (means ±
            SD, medians [IQR], p‑values).
          </li>
          <li>
            <strong>No interpretation</strong>—save that for Discussion.
          </li>
          <li>
            <strong>Limit figures/tables</strong> to a maximum of 5 total.
          </li>
        </ul>
      </div>
      {/* Discussion */}
      <div>
        <h4 className="font-bold">7. Discussion</h4>
        <ul className="list-disc list-inside">
          <li>400-600 words</li>
          <li>
            <strong>Interpretation:</strong> Explain findings relative to your
            hypothesis
          </li>
          <li>
            <strong>Comparison:</strong> Contrast with prior studies
          </li>
          <li>
            <strong>Limitations:</strong> Acknowledge potential biases and
            generalizability issues
          </li>
          <li>
            <strong>Implications:</strong> Practical or theoretical significance
          </li>
          <li>
            <strong>Future directions:</strong> Specific next steps or
            unanswered questions
          </li>
        </ul>
      </div>
      {/* Conclusion */}
      <div>
        <h4 className="font-bold">8. Conclusion</h4>
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
        <h4 className="font-bold">9. Acknowledgements</h4>
        <ul className="list-disc list-inside">
          <li>Funding sources (grant numbers)</li>
          <li>
            Non‑author contributions (technical assistance, manuscript review)
          </li>
          <li>Conflict of interest disclosures</li>
        </ul>
      </div>
      {/* References */}
      <div>
        <h4 className="font-bold">10. References</h4>
        <ul className="list-disc list-inside">
          <li>Vancouver style; should be numbered sequentially</li>
          <li>
            Format: 1. Lastname AB, Lastname CD. Title of article. Journal Name.
            Year;Volume(Issue):Page‑range.
          </li>
          <li>DOIs preferred when available.</li>
        </ul>
      </div>
      {/* Figure Legends */}
      <div>
        <h4 className="font-bold">11. Figure Legends</h4>
        <ul className="list-disc list-inside">
          <li>Number sequentially (Figure 1, Figure 2, etc.)</li>
          <li>
            Bold “Figure X.” followed by concise title and detailed description
            (define all abbreviations).
          </li>
        </ul>
      </div>

      {/* Tables */}
      <div>
        <h4 className="font-bold">11. Figure Legends</h4>
        <ul className="list-disc list-inside">
          <li>
            Title above table: <strong>Table 1. Title of table</strong>
          </li>
          <li>Use Word’s built‑in table function (no images).</li>
          <li>Columns clearly labeled; include units.</li>
          <li>Footnotes (superscript letters) for clarifications.</li>
        </ul>
      </div>
    </div>
  );
};

export default ManuscriptStructureFormat;
