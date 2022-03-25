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
} from './cognitive-funcion-data';

export enum CogntiveFunctionPosition {
  hero = 'hero',
  parent = 'parent',
  child = 'child',
  inferior = 'inferior',
  nemesis = 'nemesis',
  critic = 'critic',
  trickster = 'trickster',
  demon = 'demon',
}

export const hero = CogntiveFunctionPosition.hero;
export const parent = CogntiveFunctionPosition.parent;
export const child = CogntiveFunctionPosition.child;
export const inferior = CogntiveFunctionPosition.inferior;
export const nemesis = CogntiveFunctionPosition.nemesis;
export const trickster = CogntiveFunctionPosition.trickster;
export const critic = CogntiveFunctionPosition.critic;
export const demon = CogntiveFunctionPosition.demon;

interface CognitiveFunctionData {
  cognitiveFunctionType: CognitiveFunctionType;
  traits: string[];
  value: string;
}

const data: CognitiveFunctionData[] = [
  {
    cognitiveFunctionType: Si,
    traits: ['Long term memory', 'Conviction', 'Discipline', 'Honor', 'Duty'],
    value: 'Stabilizing',
  },
  {
    cognitiveFunctionType: Se,
    traits: ['Physics', 'Mechanics', 'Short term memory', 'What others do'],
    value: 'Experiencing',
  },
  {
    cognitiveFunctionType: Fi,
    traits: ['Morals', 'Principles'],
    value: 'Valuing',
  },
  {
    cognitiveFunctionType: Fe,
    traits: ['Ethics', 'Empathy', 'Guilt'],
    value: 'Connecting',
  },
  {
    cognitiveFunctionType: Ti,
    traits: ['Logic', 'True / False'],
    value: 'Reasoning',
  },
  {
    cognitiveFunctionType: Te,
    traits: ['Rationale', 'Statistics', 'Standarts'],
    value: 'Structuring',
  },
  {
    cognitiveFunctionType: Ne,
    traits: ['Metaphysics', 'Prescience', 'All futures'],
    value: 'Ideating',
  },
  {
    cognitiveFunctionType: Ni,
    traits: ['Willpower', 'Future'],
    value: 'Knowing',
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
