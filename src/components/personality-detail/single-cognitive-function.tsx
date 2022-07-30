import { useState } from "react";
import {
  CognitiveFunctionPosition,
  getCognitiveFunctionData,
} from "../../data/cognitive-function-data";
import { CognitiveFunctionType } from "../../data/cognitive-function-type";
import { getMonologueData } from "../../data/monologue-data";
import { isMainStackPosition } from "../../tools/personality-tools";
import { CognitiveFunctionIcon } from "../cognitive-function-icon/cognitive-function-icon";
import { CognitiveFunctionTitle } from "./cognitive-function-title";

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

  if (!data) {
    return (
      <div
        style={{
          color: "red",
        }}
      >
        No Data Available
      </div>
    );
  }
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
        style={{
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          fontWeight: "bold",
          background: color,
        }}
        onClick={() => setViewTraits((prev) => !prev)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0 auto",
            width: "90%",
            userSelect: "none",
            height: "2rem",
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
      </div>
      <div
        style={{
          textAlign: "left",
          paddingLeft: "0.2rem",
          paddingBottom: "0.05rem",
        }}
      >
        {viewTraits && (
          <table>
            <tbody>
              <tr>
                <td
                  style={{
                    width: "170px",
                    borderRight: "1px solid black",
                  }}
                >
                  {traitsView()}
                </td>
                <td
                  style={{
                    width: "320px",
                  }}
                >
                  {monologue()}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
