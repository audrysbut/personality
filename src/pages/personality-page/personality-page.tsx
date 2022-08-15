import { useParams } from "react-router-dom";
import { PersonalityAnalysis } from "./personality-analysis";
import { personalities } from "../../data/personality-data";

export const PersonalityPage = () => {
  const { type } = useParams();
  const personality = personalities.find((r) => r.type === type?.toUpperCase());
  if (!personality) {
    return <div>Not found {type}</div>;
  }

  return <PersonalityAnalysis personality={personality} />;
};
