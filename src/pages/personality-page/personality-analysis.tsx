import { Personality } from "../../data/personality";
import { getPersonalityTypeColor } from "../../tools/personality-tools";
import { PersonalityAnalysisDetail } from "./personality-analysis-detail";

interface PersonalityAnalysisProps {
  personality: Personality;
}
export const PersonalityAnalysis = ({
  personality,
}: PersonalityAnalysisProps) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "2px solid black",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <PersonalityDetailTitle personality={personality} />
        <PersonalityAnalysisDetail personality={personality} />
      </div>
    </>
  );
};

interface PersonalityDetailTitleProps {
  personality: Personality;
}

//TODO: move out this to another page
const PersonalityDetailTitle = ({
  personality
}: PersonalityDetailTitleProps) => {
  return (
    <div
      style={{
        background: getPersonalityTypeColor(personality, true),
        lineHeight: "1.8rem",
        alignItems: "center",
        fontWeight: "bold",
        position: "relative",
        userSelect: "none",
      }}
    >
      {`${personality.name} (${personality.type}) [${personality.rarity}%]`}
    </div>
  );
};
