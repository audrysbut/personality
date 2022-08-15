import {
  child,
  CognitiveFunctionPosition,
  critic,
  demon,
  getCognitiveFunctionData,
  hero,
  inferior,
  nemesis,
  parent,
  trickster,
} from "../../data/cognitive-function-data";
import { CognitiveFunctionType } from "../../data/cognitive-function-type";
import { Personality } from "../../data/personality";
import { CognitiveFunctionHeader } from "../../components/personality-detail/cognitive-function-header";
import { getAnalysisInfo } from "./personality-analysis-data";

interface PersonalityAnalysisDetailProps {
  personality: Personality;
}

interface CognitiveFunctionData {
  position: CognitiveFunctionPosition;
  function: CognitiveFunctionType;
}
export const PersonalityAnalysisDetail = ({
  personality,
}: PersonalityAnalysisDetailProps) => {
  const stack: CognitiveFunctionData[] = [
    { position: hero, function: personality.hero },
    { position: parent, function: personality.parent },
    { position: child, function: personality.child },
    { position: inferior, function: personality.inferior },
    { position: nemesis, function: personality.nemesis },
    { position: critic, function: personality.critic },
    { position: trickster, function: personality.trickster },
    { position: demon, function: personality.demon },
  ];
  const elements = stack.map((r) => {
    const data = getCognitiveFunctionData(r.function);
    const functionData = getAnalysisInfo(personality.type, r.function);
    return (
      <div>
        <div
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <CognitiveFunctionHeader
            cognitiveFunction={r.function}
            position={r.position}
            data={data}
          />
        </div>
        {functionData ? (
          <div
            style={{
              textAlign: "justify",
              marginLeft: "0.5rem",
            }}
          >
            {functionData.values.map((r) => (
              <div
                style={{
                  marginBottom: "0.5rem",
                }}
              >{`* ${r}`}</div>
            ))}
          </div>
        ) : undefined}
      </div>
    );
  });
  return <>{elements}</>;
};
