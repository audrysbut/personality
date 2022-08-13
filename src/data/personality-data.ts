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
import { Personality } from "./personality";
import { PersonalityType } from "./personality-type";

function opositeF(func: CognitiveFunctionType): CognitiveFunctionType {
  switch (func) {
    case Te:
      return Fi;
    case Ti:
      return Fe;
    case Ni:
      return Se;
    case Ne:
      return Si;
    case Fi:
      return Te;
    case Fe:
      return Ti;
    case Se:
      return Ni;
    case Si:
      return Ne;
  }
}

function opositeP(func: CognitiveFunctionType): CognitiveFunctionType {
  switch (func) {
    case Te:
      return Ti;
    case Ti:
      return Te;
    case Ni:
      return Ne;
    case Ne:
      return Ni;
    case Fi:
      return Fe;
    case Fe:
      return Fi;
    case Se:
      return Si;
    case Si:
      return Se;
  }
}

function makePersonality(
  type: PersonalityType,
  name: string,
  hero: CognitiveFunctionType,
  parent: CognitiveFunctionType,
  rarity: number
): Personality {
  const child = opositeF(parent);
  const inferior = opositeF(hero);
  const nemesis = opositeP(hero);
  const critic = opositeP(parent);
  const trickster = opositeP(child);
  const demon = opositeP(inferior);
  return {
    name,
    rarity,
    type,
    hero,
    parent,
    child,
    inferior,
    nemesis,
    critic,
    trickster,
    demon,
  };
}

export const entj = makePersonality("ENTJ", "Commander", Te, Ni, 1.8);
export const intj = makePersonality("INTJ", "Architect", Ni, Te, 2.1);
export const estj = makePersonality("ESTJ", "Executive", Te, Si, 8.7);
export const enfj = makePersonality("ENFJ", "Protagonist", Fe, Ni, 2.5);
export const esfj = makePersonality("ESFJ", "Consul", Fe, Si, 12.3);
export const enfp = makePersonality("ENFP", "Campaigner", Ne, Fi, 8.1);
export const entp = makePersonality("ENTP", "Debater", Ne, Ti, 3.2);
export const esfp = makePersonality("ESFP", "Entertainer", Se, Fi, 8.5);
export const estp = makePersonality("ESTP", "Entrepreneur", Se, Ti, 4.3);
export const infj = makePersonality("INFJ", "Advocate", Ni, Fe, 1.5);
export const istj = makePersonality("ISTJ", "Logistician", Si, Te, 11.6);
export const isfj = makePersonality("ISFJ", "Defender", Si, Fe, 13.8);
export const intp = makePersonality("INTP", "Logician", Ti, Ne, 3.3);
export const istp = makePersonality("ISTP", "Virtuoso", Ti, Se, 5.4);
export const infp = makePersonality("INFP", "Mediator", Fi, Ne, 4.4);
export const isfp = makePersonality("ISFP", "Adventurer", Fi, Se, 8.8);
