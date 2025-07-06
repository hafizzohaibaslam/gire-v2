import { X } from "lucide-react";

type EditModalProps = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

function EditModal({ children, title, onClose }: EditModalProps) {
  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-white rounded-[25px] px-[32px] py-[33px] w-[70%] relative space-y-[10px] max-h-[90vh] overflow-y-auto">
        <div>
          <h1 className="font-inter font-semibold text-[24px] text-[#343C6A]">
            {title}
          </h1>
          <X
            className="w-6 h-6 absolute top-4 right-4 cursor-pointer"
            onClick={onClose}
          />
        </div>
        {/* Form */}
        {children}
      </div>
    </div>
  );
}

export default EditModal;
