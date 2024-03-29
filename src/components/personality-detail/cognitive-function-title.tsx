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
      <span className="ml-1 font-bold">{value}</span>
      <span className="ml-1 font-normal">{`(${cognitiveFunction})`}</span>
      <span className="ml-1 font-normal">{`[${position}]`}</span>
    </>
  );
};
