import React from "react";

interface HorizonLineProps {
  width: string;
}

const HorizonLine: React.FC<HorizonLineProps> = ({ width }) => {
  return (
    <div
      style={{
        width: width,
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "20px 0",
      }}
    ></div>
  );
};

export default HorizonLine;