import { CognitiveFunctionType } from './cognitive-funcion-data';

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
  position: CogntiveFunctionPosition;
  cognitiveFunctionType: CognitiveFunctionType;
}
