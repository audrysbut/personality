import { Dispatch, SetStateAction, useState } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';
import { getPersonalityTypeColor } from './cell';

interface PersonalityDetailTitleProps {
  personality: Personality;
  selectedTypesState: [Personality[], Dispatch<SetStateAction<Personality[]>>];
}

export const PersonalityDetailTitle = ({
  personality,
  selectedTypesState,
}: PersonalityDetailTitleProps) => {
  const [active, setActive] = useState(false);
  const [, setActivePersonalities] = selectedTypesState;
  const onClick = () =>
    setActivePersonalities((prev) => prev.filter((p) => p !== personality));

  const opacity = active ? 0.3 : 0.2;
  return (
    <div
      style={{
        background: getPersonalityTypeColor(personality, true, false),
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
        onClick={onClick}
      >
        x
      </span>
    </div>
  );
};
