import {
  CognitiveFunctionType,
  Fe,
  Fi,
  Ne,
  Ni,
  Se,
  Si,
  Te,
  Ti,
} from "./cognitive-function-type";

export enum CognitiveFunctionPosition {
  hero = "hero",
  parent = "parent",
  child = "child",
  inferior = "inferior",
  nemesis = "nemesis",
  critic = "critic",
  trickster = "trickster",
  demon = "demon",
}

export const hero = CognitiveFunctionPosition.hero;
export const parent = CognitiveFunctionPosition.parent;
export const child = CognitiveFunctionPosition.child;
export const inferior = CognitiveFunctionPosition.inferior;
export const nemesis = CognitiveFunctionPosition.nemesis;
export const trickster = CognitiveFunctionPosition.trickster;
export const critic = CognitiveFunctionPosition.critic;
export const demon = CognitiveFunctionPosition.demon;

interface CognitiveFunctionData {
  cognitiveFunctionType: CognitiveFunctionType;
  traits: string[];
  value: string;
}

const data: CognitiveFunctionData[] = [
  {
    cognitiveFunctionType: Si,
    traits: ["Long term memory", "Conviction", "Discipline", "Honor", "Duty"],
    value: "Stabilizing",
  },
  {
    cognitiveFunctionType: Se,
    traits: ["Physics", "Mechanics", "Short term memory", "What others do"],
    value: "Experiencing",
  },
  {
    cognitiveFunctionType: Fi,
    traits: ["Morals", "Principles"],
    value: "Valuing",
  },
  {
    cognitiveFunctionType: Fe,
    traits: ["Ethics", "Empathy", "Guilt"],
    value: "Connecting",
  },
  {
    cognitiveFunctionType: Ti,
    traits: ["Logic", "True / False"],
    value: "Reasoning",
  },
  {
    cognitiveFunctionType: Te,
    traits: ["Rationale", "Statistics", "Standarts"],
    value: "Structuring",
  },
  {
    cognitiveFunctionType: Ne,
    traits: ["Metaphysics", "Prescience", "All futures"],
    value: "Ideating",
  },
  {
    cognitiveFunctionType: Ni,
    traits: ["Willpower", "Future"],
    value: "Knowing",
  },
];

export function getCognitiveFunctionData(
  cognitiveFunction: CognitiveFunctionType
): CognitiveFunctionData | undefined {
  const records = data.filter(
    (t) => t.cognitiveFunctionType === cognitiveFunction
  );
  if (records.length > 0) {
    return records[0];
  }
  return undefined;
}
