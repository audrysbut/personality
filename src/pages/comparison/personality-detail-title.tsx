import { Personality } from '../../data/cognitive-funcion-data';
import { getPersonalityTypeColor } from './cell';

interface PersonalityDetailTitleProps {
  personality: Personality;
}

export const PersonalityDetailTitle = ({
  personality,
}: PersonalityDetailTitleProps) => {
  return (
    <div
      style={{
        background: getPersonalityTypeColor(personality, true, false),
        lineHeight: '1.5rem',
        fontWeight: 'bold',
      }}
    >
      {personality.type}
    </div>
  );
};
