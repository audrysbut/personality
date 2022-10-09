import { CognitiveFunctionPosition } from "./cognitive-function-data";
import { CognitiveFunctionType } from "./cognitive-function-type";
import { feMonologueData } from "./monologues/fe-monologue-data";
import { fiMonologueData } from "./monologues/fi-monologue-data";
import { MonologueData } from "./monologues/monologue-data";
import { neMonologueData } from "./monologues/ne-monologue-data";
import { niMonologueData } from "./monologues/ni-monologue-data";
import { seMonologueData } from "./monologues/se-monologue-data";
import { siMonologueData } from "./monologues/si-monologue-data";
import { teMonologueData } from "./monologues/te-monologue-data";
import { tiMonologueData } from "./monologues/ti-monologue-data";

const monologueData: MonologueData[] = [
  ...neMonologueData,
  ...niMonologueData,
  ...seMonologueData,
  ...siMonologueData,
  ...teMonologueData,
  ...tiMonologueData,
  ...feMonologueData,
  ...fiMonologueData,
];

export function getMonologueData(
  cognitiveFunction: CognitiveFunctionType,
  position: CognitiveFunctionPosition
): MonologueData | undefined {
  const found = monologueData
    .filter((r) => r.cognitiveFunction === cognitiveFunction)
    .filter((r) => r.position === position);

  if (found) {
    return found[0];
  }
  return undefined;
}
