import { Personality } from '../../data/personality';
import { ActivePersonalityTypeSelector } from '../../pages/inspect/active-personality-type-selector';
import { CognitiveFunctionDescription } from './cognitive-function-description';
import { PersonalityDetailTitle } from './personality-detail-title';

interface PersonalityDetailProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetail = ({
  personality,
  states,
}: PersonalityDetailProps) => {
  return (
    <div
      style={{
        minWidth: '15rem',
        border: '2px solid black',
        marginRight: '1rem',
        paddingBottom: '0.5em',
        textAlign: 'center',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
    >
      <PersonalityDetailTitle personality={personality} states={states} />
      <CognitiveFunctionDescription personality={personality} />
    </div>
  );
};
