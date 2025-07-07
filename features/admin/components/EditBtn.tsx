import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

type EditBtnProps = {
  handleEdit: () => void;
  className?: string;
  iconClassName?: string;
};

function EditBtn({ handleEdit, className, iconClassName }: EditBtnProps) {
  return (
    <button
      onClick={handleEdit}
      className={cn(
        "absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-[#3385FF] transition-all duration-300 group",
        className
      )}
    >
      <Pencil
        className={cn(
          "w-5 h-5 text-[#3385FF] group-hover:text-white transition-all duration-300",
          iconClassName
        )}
      />
    </button>
  );
}

export default EditBtn;
