import { PersonalityDetail } from "../../components/personality-detail/personality-detail";
import {
  ActivePersonalityTypeSelector,
  useActivePersonalityTypes,
} from "./active-personality-type-selector";
import { InspectTable } from "./inspect-table";

export const InspectPage = () => {
  const states = useActivePersonalityTypes();
  return (
    <>
      <InspectTable states={states} />
      <PersonalityDetailView states={states} />
    </>
  );
};

interface PersonalityDetailViewProps {
  states: ActivePersonalityTypeSelector;
}

const PersonalityDetailView = ({ states }: PersonalityDetailViewProps) => {
  const { activePersonalities } = states;
  const personalitiesView = activePersonalities.map((p) => (
    <PersonalityDetail personality={p} states={states} key={p.type} />
  ));
  return <div style={{ display: "flex" }}>{personalitiesView}</div>;
};
