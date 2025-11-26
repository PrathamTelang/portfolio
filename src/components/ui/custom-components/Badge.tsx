import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default" }) => {
  const base = "px-2 py-1 text-sm rounded-md font-medium";
  const styles = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white",
  };

  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
};

export default Badge;
