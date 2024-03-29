import { Personality } from "../../data/personality";
import { ActivePersonalityTypeSelector } from "../../pages/inspect/active-personality-type-selector";
import { CognitiveFunctionDescription } from "./cognitive-function-description";
import { PersonalityDetailTitle } from "./personality-detail-title";

interface PersonalityDetailProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetail = ({
  personality,
  states,
}: PersonalityDetailProps) => {
  return (
    <div className="overflow-hidden border border-black rounded-md mr-4">
      <PersonalityDetailTitle personality={personality} states={states} />
      <CognitiveFunctionDescription personality={personality} />
    </div>
  );
};
