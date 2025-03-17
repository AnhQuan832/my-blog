import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};

export default Avatar;
