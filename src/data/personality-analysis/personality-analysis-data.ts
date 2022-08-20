import { CognitiveFunctionType } from "../cognitive-function-type";
import { PersonalityType } from "../personality-type";
import { data as infp } from "./infp-data";
import { data as intj } from "./intj-data";
import { data as intp} from "./intp-data";

export interface PersonalityAnalysisInfo {
  type: PersonalityType;
  cognitiveFunction: CognitiveFunctionType;
  values: string[];
}

const data: PersonalityAnalysisInfo[] = [...infp, ...intp, ...intj];

export function getAnalysisInfo(
  type: PersonalityType,
  cognitiveFunction: CognitiveFunctionType
): PersonalityAnalysisInfo | undefined {
  return data.find(
    (r) => r.cognitiveFunction === cognitiveFunction && r.type === type
  );
}
