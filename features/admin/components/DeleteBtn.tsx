import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";

type EditBtnProps = {
  handleDelete: () => void;
  className?: string;
  iconClassName?: string;
};

function DeleteBtn({ handleDelete, className, iconClassName }: EditBtnProps) {
  return (
    <button
      onClick={handleDelete}
      className={cn(
        "bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-[#FF3333] transition-all duration-300 group",
        className
      )}
    >
      <Trash
        className={cn(
          "w-5 h-5 text-[#FF3333] group-hover:text-white transition-all duration-300",
          iconClassName
        )}
      />
    </button>
  );
}

export default DeleteBtn;
