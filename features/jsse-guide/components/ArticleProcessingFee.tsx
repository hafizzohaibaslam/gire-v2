import React from "react";

const ArticleProcessingFee = () => {
  return (
    <div className="space-y-[30px]">
      <h1 className="font-playfair-display font-semibold text-[32px] lg:text-[48px] leading-[36px] lg:leading-[46px] -tracking-[1px]">
        Article Processing Fee
      </h1>
      {/* Article Processing Fee */}
      <div className="space-y-[25px]">
        <p className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
          Please note the following regarding the article processing fee:
        </p>
        <ul className="list-disc list-inside space-y-[15px] ml-[20px]">
          <li className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
            <strong>Standard Submission:</strong> <br /> There is no submission
            fee for standard submissions. $300 will be required once your
            manuscript is accepted for publication. You will receive the payment
            details and instructions via email after publication is confirmed.
          </li>
          <li className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
            <strong>Fast Track Submission:</strong> <br /> For Fast Track
            Submissions, a $250 submission fee is required. This fee ensures
            expedited review of your manuscript, guaranteeing faster processing
            and feedback. The payment information will be sent to your email,
            and the fee must be paid at the time of submission.
          </li>
        </ul>
        <p className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[22px] lg:leading-[32px]">
          Payment Information will be sent to the corresponding author&apos;s
          email once your manuscript is accepted or when the Fast Track
          submission is processed.
        </p>
      </div>

      {/* Important Note */}
      <div className="space-y-[25px]">
        <h1 className="font-playfair-display font-semibold text-[24px] lg:text-[32px] leading-[36px] lg:leading-[46px] -tracking-[1px]">
          Important Note:
        </h1>
        <ul className="list-disc list-inside space-y-[15px] ml-[20px]">
          <li className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]">
            While the Fast Track option guarantees faster review and processing,
            it does not guarantee publication. Your manuscript will still be
            subject to the peer-review process, and the final decision on
            acceptance depends on the quality and relevance of the manuscript.
          </li>
          <li className="text-normal text-[#52525B] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]">
            The $250 submission fee is required at the time of submission for
            Fast Track, which does not include publication fee.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleProcessingFee;
