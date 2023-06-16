import React from "react";

interface HorizonLineProps {
  borderBottom: string;
  marginLeft?: string;
}
const HorizonLine: React.FC<HorizonLineProps> = ({ borderBottom, marginLeft }) => {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: borderBottom,
        lineHeight: "0.1em",
        margin: "20px 0",
        marginLeft: marginLeft || "0px",
      }}
    ></div>
  );
};

export default HorizonLine;