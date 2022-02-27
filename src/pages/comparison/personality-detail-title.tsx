import { Personality } from '../../data/personality';
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
        height: '1.5rem',
        alignItems: 'center',
        lineHeight: '1.5rem',
      }}
    >
      {personality.type}
    </div>
  );
};
