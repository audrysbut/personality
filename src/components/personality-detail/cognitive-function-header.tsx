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
    <div
      style={{
        display: "flex",
        height: "2rem",
        width: "100%",
        userSelect: "none",
        alignItems: "center",
        paddingLeft: "0.5rem",
      }}
    >
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
