import { useState } from "react";
import tw from "tailwindcss";
import {
  CognitiveFunctionPosition,
  getCognitiveFunctionData,
} from "../../data/cognitive-function-data";
import { CognitiveFunctionType } from "../../data/cognitive-function-type";
import { getMonologueData } from "../../data/monologue-data";
import { isMainStackPosition } from "../../tools/personality-tools";
import { CognitiveFunctionHeader } from "./cognitive-function-header";

interface SingleCognitiveFunctionProps {
  position: CognitiveFunctionPosition;
  cognitiveFunction: CognitiveFunctionType;
}

const mainStackColorActive =
  "linear-gradient(to right, white, rgba(0,255,0,0.8), white)";

const mainStackColorInactive =
  "linear-gradient(to right, white, rgba(0,255,0,0.3), white)";

function getMainStackColor(hovered: boolean) {
  return hovered ? mainStackColorActive : mainStackColorInactive;
}

const shadowStackColorActive =
  "linear-gradient(to right, white, rgba(0,0,0,0.5), white)";

const shadowStackColorInActive =
  "linear-gradient(to right, white, rgba(0,0,0,0.3), white)";

function getShadowStackColor(hovered: boolean) {
  return hovered ? shadowStackColorActive : shadowStackColorInActive;
}

export const SingleCognitiveFunction = ({
  cognitiveFunction,
  position,
}: SingleCognitiveFunctionProps) => {
  const isMainStack = isMainStackPosition(position);
  const [viewTraits, setViewTraits] = useState(isMainStack);
  const [hover, setHover] = useState(false);
  const data = getCognitiveFunctionData(cognitiveFunction);

  const color = isMainStack
    ? getMainStackColor(hover)
    : getShadowStackColor(hover);

  const traitsView = () => data.traits.map((t) => <div>{`* ${t}`}</div>);
  const monologue = () => {
    const monologue = getMonologueData(cognitiveFunction, position);
    if (monologue) {
      return <div>{monologue.monologue}</div>;
    }
    return undefined;
  };
  return (
    <>
      <div
        className="border-t border-b border-black font-bold"
        style={{ background: color }}
        onClick={() => setViewTraits((prev) => !prev)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CognitiveFunctionHeader
          cognitiveFunction={cognitiveFunction}
          position={position}
          data={data}
        />
      </div>
      <div className="text-left pl-1 pb-1">
        {viewTraits && (
          <table>
            <tbody>
              <tr>
                <td className="w-40">{traitsView()}</td>
                {
                  <td className="w-80 border-l border-black pl-1">
                    {monologue()}
                  </td>
                }
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
