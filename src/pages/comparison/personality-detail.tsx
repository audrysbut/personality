import { Personality } from '../../data/personality';
import { CognitiveFunctionView } from './cognitive-function-view';
import { PersonalityDetailTitle } from './personality-detail-title';

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
      <PersonalityDetailTitle personality={personality} />
      <CognitiveFunctionView personality={personality} />
    </div>
  );
};
