import React from "react";
import { logo } from "../assets";

// The Header component is a functional component that represents the header section of a webpage.
const Header = () => {
  return (
    // The header section is structured as a header element with full width.
    <header className="w-full flex justify-center items-center flex-col">
      {/* Navigation bar with logo and a GitHub button */}
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* Logo image */}
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        {/* Button to open the project's GitHub page in a new tab */}
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/hamse47/SummaryAI", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      {/* Main headline of the header section */}
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="green_orange_gradient ">OpenAI GPT-4</span>
      </h1>

      {/* Description text explaining the purpose of the Summrize application */}
      <h2 className="desc">
        Simplify your reading with Summrize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Header;
