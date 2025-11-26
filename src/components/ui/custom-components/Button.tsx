import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const styles = {
    default: "bg-black text-white hover:bg-neutral-800",
    outline:
      "border border-neutral-700 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-500 dark:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
