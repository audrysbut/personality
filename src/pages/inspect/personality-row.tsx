import { useState } from "react";
import { CognitiveFunctionIcon } from "../../components/cognitive-function-icon/cognitive-function-icon";
import { CognitiveFunctionPosition } from "../../data/cognitive-function-data";
import { Personality } from "../../data/personality";
import { getPersonalityTypeColor } from "../../tools/personality-tools";
import { ActivePersonalityTypeSelector } from "./active-personality-type-selector";

interface PersonalityRowProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityRow = ({
  personality,
  states,
}: PersonalityRowProps) => {
  const { toggle } = states;
  const isActive = states.isActive(personality);
  const activeColor = getPersonalityTypeColor(personality, isActive);
  const [active, setActive] = useState(false);
  const { hero, parent, child, inferior } = personality;
  const fontWeight = active ? "font-bold" : "font-normal";
  return (
    <td
      className={`border-solid border-2 border-black text-center ${activeColor} select-none`}
      onClick={() => toggle(personality)}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <span className={`${fontWeight} text-2xl`}>{personality.type}</span>
      <div className={`${fontWeight} pb-2`}>{personality.name}</div>

      <div className="flex justify-center">
        <CognitiveFunctionIcon
          cognitiveFunction={hero}
          position={CognitiveFunctionPosition.hero}
        />
        <CognitiveFunctionIcon
          cognitiveFunction={parent}
          position={CognitiveFunctionPosition.parent}
        />
        <CognitiveFunctionIcon
          cognitiveFunction={child}
          position={CognitiveFunctionPosition.child}
        />
        <CognitiveFunctionIcon
          cognitiveFunction={inferior}
          position={CognitiveFunctionPosition.inferior}
        />
      </div>
    </td>
  );
};
