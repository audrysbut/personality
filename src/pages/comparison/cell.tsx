import { useState } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';
import { ActivePersonalityTypeSelector } from '../inspect/active-personality-type-selector';

interface CellProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const Cell = ({ personality, states }: CellProps) => {
  const [cursorOver, setCursorOver] = useState(false);
  const { isActive, toggle } = states;
  const active = isActive(personality);
  const onClick = () => toggle(personality);

  return (
    <div
      onMouseOver={() => setCursorOver(true)}
      onMouseOut={() => setCursorOver(false)}
      onClick={onClick}
      style={{
        background: getPersonalityTypeColor(personality, active),
        width: '6rem',
        height: '3rem',
        border: '2px solid black',
        borderRadius: '6px',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '6rem',
          height: '3rem',
          textAlign: 'center',
          lineHeight: '3rem',
          fontWeight: cursorOver ? 'bold' : 'initial',
        }}
      >
        {personality.type}
      </div>
    </div>
  );
};

export function getPersonalityTypeColor(
  personality: Personality,
  selected: boolean
): string {
  const type = personality.type;
  const intuitive = type[1] === 'N';
  const sensor = type[1] === 'S';
  const thinker = type[2] === 'T';
  const feeler = type[2] === 'F';
  const judger = type[3] === 'J';
  const perceiver = type[3] === 'P';

  const analytic = intuitive && thinker;
  if (analytic && selected) {
    return 'violet';
  }

  const diplomat = intuitive && feeler;
  if (diplomat && selected) {
    return 'lightgreen';
  }

  const sentinel = sensor && judger;
  if (sentinel && selected) {
    return 'lightblue';
  }

  if (perceiver && selected) {
    return 'yellow';
  }

  return 'white';
}
