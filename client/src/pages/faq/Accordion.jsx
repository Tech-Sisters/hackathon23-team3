/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex m-auto w-3/6 border rounded-[8px] py-3"
      >
        <svg
          className="fill-pink shrink-0 ml-8 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
        <span className="font-serif text-black-200 ml-6 px-2">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-serif ml-[415px] text-[15px] w-2/5 pt-4 text-justify">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
