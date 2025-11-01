import React from 'react';

const UserTypeCard = ({ title = '', description = '', bgColor = 'bg-gray-800', imageSrc }) => {
  return (
    <div className={`rounded-lg p-6 flex items-center space-x-4 ${bgColor} text-white`}>
      {imageSrc && <img src={imageSrc} alt={title} className="w-16 h-16 object-cover rounded-md" />}
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-200 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default UserTypeCard;