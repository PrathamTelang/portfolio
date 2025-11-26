import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="border rounded-md px-3 py-2 w-full dark:bg-neutral-900 dark:text-white dark:border-neutral-700"
    />
  );
});

Input.displayName = "Input";
export default Input;
