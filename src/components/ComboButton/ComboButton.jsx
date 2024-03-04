const ComboButton = ({ toggle, language, handleOpenSidebar }) => {
  return (
    <div className="lg:hidden flex items-center gap-3">
      <button
        className="relative group"
        onClick={() => handleOpenSidebar()}
        data-collapse-toggle="navbar-default"
        type="button">
        <div className="relative  flex overflow-hidden items-center justify-center  w-[45px] h-[45px] transform transition-all focus:outline-0  ring-0 ring-gray-300   duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                language == "en" ? "origin-left" : "origin-right"
              } ${
                toggle
                  ? language == "en"
                    ? "rotate-[42deg]"
                    : "-rotate-[42deg]"
                  : "rotate-[0deg]"
              } `}></div>
            <div
              className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                toggle && "-translate-x-10"
              }`}></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 
              
              ${language == "en" ? "origin-left" : "origin-right"}

              ${
                toggle
                  ? language == "en"
                    ? "-rotate-[42deg]"
                    : "rotate-[42deg]"
                  : "-rotate-[0deg]"
              }`}></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ComboButton;
