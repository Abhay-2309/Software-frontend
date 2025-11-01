import React from 'react';

const FeatureCard = ({ title = '', subtitle = '', bgColor = 'bg-gray-800', imageSrc }) => {
  return (
    <div className={`rounded-lg p-4 flex flex-col justify-between ${bgColor} text-white shadow-md min-h-[120px]`}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{subtitle}</p>
      </div>
      {imageSrc && (
        <img src={imageSrc} alt={title} className="mt-4 w-full object-cover rounded-md h-20" />
      )}
    </div>
  );
};

export default FeatureCard;