import { CSSProperties, useState } from 'react';
import { CongnitiveFunctionIcon } from '../../components/cognitive-function-icon/cognitive-function-icon';
import { Personality } from '../../data/cognitive-funcion-data';
import { CogntiveFunctionPosition } from '../../data/cognitive-function-roles';
import { getPersonalityTypeColor } from '../../tools/personality-tools';
import { ActivePersonalityTypeSelector } from './active-personality-type-selector';

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
  const borderWeight = active || isActive ? 2 : 1;
  const { hero, parent, child, inferior } = personality;
  return (
    <td
      style={{
        border: `${borderWeight}px solid black`,
        textAlign: 'center',
        background: `${activeColor}`,
        userSelect: 'none',
        fontWeight: active ? 'bold' : 'normal',
        fontSize: '1.4rem',
      }}
      onClick={() => toggle(personality)}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {personality.type}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CongnitiveFunctionIcon
          cognitiveFunction={hero}
          position={CogntiveFunctionPosition.hero}
        />
        <CongnitiveFunctionIcon
          cognitiveFunction={parent}
          position={CogntiveFunctionPosition.parent}
        />
        <CongnitiveFunctionIcon
          cognitiveFunction={child}
          position={CogntiveFunctionPosition.child}
        />
        <CongnitiveFunctionIcon
          cognitiveFunction={inferior}
          position={CogntiveFunctionPosition.inferior}
        />
      </div>
    </td>
  );
};
