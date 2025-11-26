import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border rounded-xl p-4 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
