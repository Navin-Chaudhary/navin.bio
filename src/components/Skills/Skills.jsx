import React from 'react';



function Skills() {
  return (
    <section className=' pt-2'>
      <h2 className="text-xl lg:text-2xl font-bold  text-white mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2 text-white ">
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
        React
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
        Javascript
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
        Tailwind
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
          HTML
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
         CSS
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
        SASS
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default hover:bg-[#363846] hover:text-[#b4b7c5] transition-all duration-600">
         More
        </span>
        
      </div>
    </section>
  );
}

export default Skills;