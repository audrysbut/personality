import { CognitiveFunctionType } from "../../../data/cognitive-function-type";
import { PersonalityType } from "../../../data/personality-type";
import { infpData } from "./infp-data";
import { intjData } from "./intj-data";

export interface PersonalityAnalysisInfo {
  type: PersonalityType;
  cognitiveFunction: CognitiveFunctionType;
  values: string[];
}

const data: PersonalityAnalysisInfo[] = [...intjData, ...infpData];

export function getAnalysisInfo(
  type: PersonalityType,
  cognitiveFunction: CognitiveFunctionType
): PersonalityAnalysisInfo | undefined {
  return data.find(
    (r) => r.cognitiveFunction === cognitiveFunction && r.type === type
  );
}
