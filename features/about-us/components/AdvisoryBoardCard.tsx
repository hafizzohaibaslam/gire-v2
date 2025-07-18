import Image from "next/image";
import React from "react";
import EditBtn from "@/features/admin/components/EditBtn";
import { AdvisoryBoard } from "@/features/admin/lib/types";

export type AdvisoryBoardCardProps = {
  board: AdvisoryBoard;
  handleEdit?: () => void;
  showEditBtn?: boolean;
};

const AdvisoryBoardCard = ({
  board,
  handleEdit = () => {},
  showEditBtn = false,
}: AdvisoryBoardCardProps) => {
  return (
    <div className="relative bg-[#E8EAEE] space-y-[30px] p-[16px] rounded-md">
      {showEditBtn && <EditBtn handleEdit={handleEdit} />}
      <div className="flex justify-center">
        <Image
          src={board.image}
          alt="University Logo"
          width={100}
          height={100}
          className="w-[180px] h-[175px]"
        />
      </div>
      <div className="bg-white space-y-[10px] p-[20px] capitalize rounded-[12px]">
        <h2 className="text-[#19191B] text-[18px] font-semibold leading-[28px]">
          {board.title}
        </h2>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#787A82] text-[16px] font-normal leading-[25px]">
            {board.department}, {board.affiliation}
          </p>

          <p className="text-[#787A82] text-[16px] font-normal leading-[25px]">
            <b>field: </b> {board.field}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoardCard;
