import { Personality } from '../../data/cognitive-funcion-data';
import { getPersonalityTypeColor } from '../comparison/cell';
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
  const activeColor = getPersonalityTypeColor(personality, isActive, false);
  return (
    <td
      style={{
        border: '1px solid black',
        textAlign: 'center',
        background: activeColor,
        userSelect: 'none',
      }}
      onClick={() => toggle(personality)}
    >
      {personality.type}
    </td>
  );
};
