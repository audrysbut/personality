import { useState } from 'react';
import { CognitiveFunctionIcon } from '../../components/cognitive-function-icon/cognitive-function-icon';
import { CognitiveFunctionPosition } from '../../data/cognitive-function-roles';
import { Personality } from '../../data/personality';
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
  const fontWeight = active ? 'bold' : 'normal';
  return (
    <td
      style={{
        border: `${borderWeight}px solid black`,
        textAlign: 'center',
        background: `${activeColor}`,
        userSelect: 'none',
      }}
      onClick={() => toggle(personality)}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <span
        style={{
          fontWeight,
          fontSize: '1.4rem',
        }}
      >
        {personality.type}
      </span>
      <div
        style={{
          fontWeight,
          paddingBottom: '0.5rem',
        }}
      >
        {personality.name}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
