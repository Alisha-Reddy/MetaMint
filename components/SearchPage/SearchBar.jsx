import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = () => {
  return (
      <div className="my-4 sm:my-14 bg-[var(--bg-color)] flex rounded-full items-center mt-32 mb-12sm:mt-8 sm:mb-4 shadow-[0px_0px_20px_10px_var(--shadow-light-color)]">
        <BsSearch className="text-3xl p-2 cursor-pointer text-icons-color" />
        <input type="text" placeholder="Type yout keyword..." className="w-5/6 border-0 outline-none p-8 bg-main-bg text-icons-color placeholder:text-icons-color placeholder:text-lg"/>
        <BsArrowRight className="text-3xl p-2 cursor-pointer text-icons-color" />
      </div>
  );
};

export default SearchBar;