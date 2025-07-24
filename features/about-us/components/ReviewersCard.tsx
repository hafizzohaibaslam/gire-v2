import Image from "next/image";
import React from "react";
import EditBtn from "@/features/admin/components/EditBtn";
import { Reviewer } from "@/features/admin/lib/types";
import DeleteBtn from "@/features/admin/components/DeleteBtn";

export type EditorialTeamCardProps = {
  reviewer: Reviewer;
  showEditBtn?: boolean;
  handleEdit?: () => void;
  showDeleteBtn?: boolean;
  handleDelete?: () => void;
};

const EditorialTeamCard = ({
  reviewer,
  handleEdit = () => {},
  showEditBtn = false,
  showDeleteBtn = false,
  handleDelete = () => {},
}: EditorialTeamCardProps) => {
  return (
    <div className="relative flex flex-col sm:flex-row sm:items-center border-2 border-[#E8EAEE] rounded-[12px]">
      <div className="absolute top-4 right-4 flex gap-2">
        {showEditBtn && <EditBtn handleEdit={handleEdit} />}
        {showDeleteBtn && <DeleteBtn handleDelete={handleDelete} />}
      </div>
      <div className="overflow-hidden">
        <Image
          src={reviewer.imgUrl}
          alt="Editorial Team"
          width={100}
          height={208}
          className="w-full lg:w-[220px] h-[208px] object-cover object-top overflow-hidden"
        />
      </div>
      <div className="px-[20px] sm:px-[32px] py-[12px] capitalize space-y-[16px]">
        <h2 className="text-[#19191B] text-[18px] leading-[28px] font-bold">
          {reviewer.name}
        </h2>
        <p className="text-[#787A82] text-[14px] font-normal leading-[20px]">
          {reviewer.department}
        </p>
        <p className="text-[#787A82] text-[14px] leading-[20px] font-semibold">
          {reviewer.role}
        </p>
      </div>
    </div>
  );
};

export default EditorialTeamCard;
