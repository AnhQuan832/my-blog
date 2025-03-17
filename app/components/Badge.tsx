import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
      {text}
    </span>
  );
};

export default Badge;
