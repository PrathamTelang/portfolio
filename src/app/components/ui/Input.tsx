import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30",
        className
      )}
      {...props}
    />
  );
}
