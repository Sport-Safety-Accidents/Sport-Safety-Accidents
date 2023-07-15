import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header py-4 px-6 flex items-center justify-center">
  <div className="flex items-center">
    <button 
      className="flex items-center text-white text-sm focus:outline-none header-goback-button"
      onclick="goBack()"
    >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      
    </button>
    <div className="text-white font-semibold" id="header-title">App Title</div>
  </div>
  <div></div>
</div>

    </div>
  );
};

export default Header;
