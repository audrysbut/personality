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
  rarity: number,
  moreInfoUrl: string
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
    moreInfoUrl,
  };
}

export const entj = makePersonality(
  "ENTJ",
  "Commander",
  Te,
  Ni,
  1.8,
  "https://charakteris.info/entj-tipas"
);
export const intj = makePersonality(
  "INTJ",
  "Architect",
  Ni,
  Te,
  2.1,
  "https://charakteris.info/intj-tipas"
);
export const estj = makePersonality(
  "ESTJ",
  "Executive",
  Te,
  Si,
  8.7,
  "https://charakteris.info/estj-tipas"
);
export const enfj = makePersonality(
  "ENFJ",
  "Protagonist",
  Fe,
  Ni,
  2.5,
  "https://charakteris.info/enfj-tipas"
);

export const esfj = makePersonality(
  "ESFJ",
  "Consul",
  Fe,
  Si,
  12.3,
  "https://charakteris.info/esfj-tipas"
);
export const enfp = makePersonality(
  "ENFP",
  "Campaigner",
  Ne,
  Fi,
  8.1,
  "https://charakteris.info/enfp-tipas"
);
export const entp = makePersonality(
  "ENTP",
  "Debater",
  Ne,
  Ti,
  3.2,
  "https://charakteris.info/entp-tipas"
);
export const esfp = makePersonality(
  "ESFP",
  "Entertainer",
  Se,
  Fi,
  8.5,
  "https://charakteris.info/esfp-tipas"
);

export const estp = makePersonality(
  "ESTP",
  "Entrepreneur",
  Se,
  Ti,
  4.3,
  "https://charakteris.info/estp-tipas"
);
export const infj = makePersonality(
  "INFJ",
  "Advocate",
  Ni,
  Fe,
  1.5,
  "https://charakteris.info/infj-tipas"
);
export const istj = makePersonality(
  "ISTJ",
  "Logistician",
  Si,
  Te,
  11.6,
  "https://charakteris.info/istj-tipas"
);
export const isfj = makePersonality(
  "ISFJ",
  "Defender",
  Si,
  Fe,
  13.8,
  "https://charakteris.info/isfj-tipas"
);

export const intp = makePersonality(
  "INTP",
  "Logician",
  Ti,
  Ne,
  3.3,
  "https://charakteris.info/intp-tipas"
);
export const istp = makePersonality(
  "ISTP",
  "Virtuoso",
  Ti,
  Se,
  5.4,
  "https://charakteris.info/istp-tipas"
);
export const infp = makePersonality(
  "INFP",
  "Mediator",
  Fi,
  Ne,
  4.4,
  "https://charakteris.info/infp-tipas"
);
export const isfp = makePersonality(
  "ISFP",
  "Adventurer",
  Fi,
  Se,
  8.8,
  "https://charakteris.info/isfp-tipas"
);

export const personalities = [
  entj,
  intj,
  estj,
  enfj,
  esfj,
  enfp,
  entp,
  esfp,
  estp,
  infj,
  istj,
  isfj,
  intp,
  istp,
  infp,
  isfp,
];
