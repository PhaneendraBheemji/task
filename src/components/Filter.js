import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-black bg-[#fffff] hover:bg-white hover:text-[#ff5a60] duration-200 ease-out gap-2 py-1 px-3 sm:px-4 rounded-full text-[14px] sm:text-[16px]">
    <span className="text-3xl">{icon}</span> {/* Adjust the "text-2xl" class to your desired icon size */}
    {title}
  </div>
  

  );
};

export default Filter;
