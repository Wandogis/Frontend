import React from "react";

interface HorizonLineProps {
  width: string;
}
//컬러, 볼드 빼기
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