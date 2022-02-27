import { Personality } from '../../data/personality';
import { getPersonalityTypeColor } from './cell';

interface PersonalityDetailProps {
  personality: Personality;
}

export const PersonalityDetail = ({ personality }: PersonalityDetailProps) => {
  return (
    <div
      style={{
        width: '15rem',
        height: '30rem',
        border: '2px solid black',
        marginRight: '1rem',
        textAlign: 'center',
      }}
    >
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
      <div>content</div>
    </div>
  );
};
