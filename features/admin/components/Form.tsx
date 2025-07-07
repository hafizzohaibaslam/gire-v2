import { cn } from "@/lib/utils";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

function Form({ children, onSubmit, className }: FormProps) {
  return (
    <form
      className={cn("flex flex-col gap-8 w-full", className)}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
