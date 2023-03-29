import React, { FC } from "react";

interface Iprops {
  header: string;
  decprition: string;
  number: number;
  haveBorder?: boolean;
}
const QuaterBox: FC<Iprops> = ({
  header,
  decprition,
  number,
  haveBorder = true,
}) => {
  return (
    <div
      className={`rounded-md w-4/12 relative px-8 py-8 ${
        haveBorder && "border"
      }`}
    >
      <h2>{header}</h2>
      <p className="mt-4 text-lg text-slate-600">{decprition}</p>
      <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">
        {number}
      </div>
    </div>
  );
};

export default QuaterBox;
