import React, { FC } from "react";

interface Iprops {
  header: string;
  description: string; // Corrected typo
  number: number;
  haveBorder?: boolean;
}

const QuaterBox: FC<Iprops> = ({
  header,
  description, // Corrected prop name
  number,
  haveBorder = true,
}) => {
  return (
    <div
      role="region"
      aria-labelledby="quater-box-header"
      className={`rounded-md w-full md:w-4/12 relative px-4 md:px-8 py-8 ${haveBorder ? "border" : ""} transition duration-300 hover:shadow-lg`}
    >
      <h2 id="quater-box-header" className="text-xl font-semibold">{header}</h2>
      <p className="mt-4 text-lg text-slate-600">{description}</p>
      <div className="absolute text-gray-200 top-0 right-2 md:right-10 text-6xl md:text-9xl font-bold -z-10">
        {number}
      </div>
    </div>
  );
};

export default QuaterBox;
