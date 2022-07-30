import { CognitiveFunctionPosition } from "../../data/cognitive-function-data";
import { CognitiveFunctionType } from "../../data/cognitive-function-type";

interface CognitiveFunctionTitleProps {
  value: string;
  cognitiveFunction: CognitiveFunctionType;
  position: CognitiveFunctionPosition;
}

export const CognitiveFunctionTitle = ({
  cognitiveFunction,
  position,
  value,
}: CognitiveFunctionTitleProps) => {
  return (
    <>
      <span
        style={{
          marginLeft: "0.3rem",
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
      <span
        style={{
          marginLeft: "0.2rem",
          fontWeight: "normal",
        }}
      >
        {`(${cognitiveFunction})`}
      </span>
      <span
        style={{
          fontWeight: "normal",
          marginLeft: "0.1rem",
        }}
      >
        {`[${position}]`}
      </span>
    </>
  );
};
