import { CSSProperties, useState } from "react";
import { Personality } from "../../data/personality";
import { ActivePersonalityTypeSelector } from "../../pages/inspect/active-personality-type-selector";
import { CognitiveFunctionDescription } from "./cognitive-function-description";
import { PersonalityDetailTitle } from "./personality-detail-title";
import { Trait, traitMap } from "../../data/traits.ts/trait";
import { traits } from "../../data/traits.ts/intj";

interface PersonalityDetailProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetail = ({
  personality,
  states,
}: PersonalityDetailProps) => {
  const traitState = useState(false);
  const [state] = traitState;
  const traits = traitMap.get(personality.type);
  return (
    <div
      style={{
        minWidth: "15rem",
        border: "1px solid black",
        marginRight: "1rem",
        paddingBottom: "0.5em",
        textAlign: "center",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    >
      <PersonalityDetailTitle
        personality={personality}
        states={states}
        traitState={traitState}
        traits={traits}
      />
      {state ? (
        <TraitView traits={traits!} />
      ) : (
        <CognitiveFunctionDescription personality={personality} />
      )}
    </div>
  );
};

interface TraitViewProps {
  traits: Trait[];
}

const styling: CSSProperties = {
  border: "1px solid black",
  textAlign: "left",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const TraitView = ({ traits }: TraitViewProps) => {
  return (
    <div
    >
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th style={styling}>Trait</th>
            <th style={styling}>Description</th>
          </tr>
          {traits.map((i) => (
            <tr>
              <td style={styling}>{i.trait}</td>
              <td style={styling}>{i.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
