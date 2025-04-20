import React from 'react'
import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
const Loading = () => {
  const [loading, setLoading] = useState(true);
;

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        {/* Replace with your actual logo */}
        <div className="w-32 h-32 bg-black-600 rounded-full flex items-center justify-center mb-4">
          <span className="text-white text-[26px] font-bold pb-15">
            <img src={assets.logo} alt="" />
            <h2>AbdulRehman</h2>
          </span>
        </div>
        
        {/* Loading spinner */}
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        
        {/* Loading text */}
        <p className="mt-4 text-white text-[20px]">Soon You'll Chat Smarter -----⚙️ <br /> AI ChatBot <span className='text-red-600 text-[22px]'>Launching Soon!</span>🤖</p>
      </div>
    </div>
  );
}

export default Loading