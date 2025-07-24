import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0E0E0E] rounded-xl border border-[#1F1F1F] p-6 w-[337px] h-[196px] flex flex-col justify-between shadow-md">
      
      <img
        src={icon}
        alt="Feature Icon"
        className="w-10 h-10 mb-3"
      />

      
      <h3 className="text-white text-[16px] font-semibold leading-snug mb-2">
        {title}
      </h3>

      
      <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
