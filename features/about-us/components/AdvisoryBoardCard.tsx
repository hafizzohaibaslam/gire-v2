import Image from "next/image";
import React from "react";
import EditBtn from "@/features/admin/components/EditBtn";
import { AdvisoryBoard } from "@/features/admin/lib/types";
import DeleteBtn from "@/features/admin/components/DeleteBtn";

export type AdvisoryBoardCardProps = {
  board: AdvisoryBoard;
  showEditBtn?: boolean;
  handleEdit?: () => void;
  showDeleteBtn?: boolean;
  handleDelete?: () => void;
};

const AdvisoryBoardCard = ({
  board,
  handleEdit = () => {},
  showEditBtn = false,
  showDeleteBtn = false,
  handleDelete = () => {},
}: AdvisoryBoardCardProps) => {
  return (
    <div className="relative bg-[#E8EAEE] p-[16px] rounded-md flex flex-col">
      {" "}
      {/* changed here */}
      <div className="absolute top-4 right-4 flex gap-2">
        {showEditBtn && <EditBtn handleEdit={handleEdit} />}
        {showDeleteBtn && <DeleteBtn handleDelete={handleDelete} />}
      </div>
      <div className="flex justify-center max-w-[180px] max-h-[175px] mx-auto">
        <Image
          src={board.imgUrl}
          alt="Advisory Board Image"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-auto bg-white space-y-[10px] p-[20px] capitalize rounded-[12px]">
        {" "}
        {/* added mt-auto */}
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
