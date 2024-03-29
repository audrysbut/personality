import {
  CognitiveFunctionData,
  CognitiveFunctionPosition,
} from "../../data/cognitive-function-data";
import { CognitiveFunctionType } from "../../data/cognitive-function-type";
import { CognitiveFunctionIcon } from "../cognitive-function-icon/cognitive-function-icon";
import { CognitiveFunctionTitle } from "./cognitive-function-title";

interface CognitiveFunctionHeaderProps {
  cognitiveFunction: CognitiveFunctionType;
  position: CognitiveFunctionPosition;
  data: CognitiveFunctionData;
}

export const CognitiveFunctionHeader = ({
  cognitiveFunction,
  position,
  data,
}: CognitiveFunctionHeaderProps) => {
  return (
    <div className="flex h-8 w-full select-none items-center pl-2">
      <CognitiveFunctionIcon
        cognitiveFunction={cognitiveFunction}
        position={position}
      />
      <CognitiveFunctionTitle
        value={data.value}
        cognitiveFunction={cognitiveFunction}
        position={position}
      />
    </div>
  );
};
