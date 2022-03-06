import { useState } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';
import { ActivePersonalityTypeSelector } from '../inspect/active-personality-type-selector';
import { getPersonalityTypeColor } from './cell';

interface PersonalityDetailTitleProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetailTitle = ({
  personality,
  states,
}: PersonalityDetailTitleProps) => {
  const [active, setActive] = useState(false);
  const opacity = active ? 0.3 : 0.2;
  const { deactivatePersonality } = states;
  return (
    <div
      style={{
        background: getPersonalityTypeColor(personality, true),
        lineHeight: '1.5rem',
        fontWeight: 'bold',
        position: 'relative',
      }}
    >
      {personality.type}
      <span
        style={{
          right: '0rem',
          top: 0,
          padding: '0.0rem 0.4rem 0rem 0.4rem',
          position: 'absolute',
          background: `rgba(0,0,0,${opacity})`,
          userSelect: 'none',
        }}
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => deactivatePersonality(personality)}
      >
        x
      </span>
    </div>
  );
};
