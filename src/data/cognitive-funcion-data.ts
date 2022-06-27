export enum CognitiveFunctionType {
  Ni = 'Ni',
  Ne = 'Ne',
  Ti = 'Ti',
  Te = 'Te',
  Si = 'Si',
  Se = 'Se',
  Fi = 'Fi',
  Fe = 'Fe',
}

export const Ni = CognitiveFunctionType.Ni;
export const Si = CognitiveFunctionType.Si;
export const Ti = CognitiveFunctionType.Ti;
export const Fi = CognitiveFunctionType.Fi;

export const Ne = CognitiveFunctionType.Ne;
export const Se = CognitiveFunctionType.Se;
export const Te = CognitiveFunctionType.Te;
export const Fe = CognitiveFunctionType.Fe;

export type PersonalityType =
  | 'INFJ'
  | 'INTJ'
  | 'ENTJ'
  | 'ESTJ'
  | 'ENFJ'
  | 'ESFJ'
  | 'ENFP'
  | 'ENTP'
  | 'ESFP'
  | 'ESTP'
  | 'ISTJ'
  | 'ISFJ'
  | 'INTP'
  | 'ISTP'
  | 'INFP'
  | 'ISFP';

export interface Personality {
  type: PersonalityType;
  hero: CognitiveFunctionType;
  parent: CognitiveFunctionType;
  child: CognitiveFunctionType;
  inferior: CognitiveFunctionType;
  nemesis: CognitiveFunctionType;
  critic: CognitiveFunctionType;
  trickster: CognitiveFunctionType;
  demon: CognitiveFunctionType;
  rarity: number;
}

export const intj: Personality = {
  type: 'INTJ',
  hero: Ni,
  parent: Te,
  child: Fi,
  nemesis: Ne,
  inferior: Se,
  critic: Ti,
  trickster: Fe,
  demon: Si,
  rarity: 2.1,
};

export const entj: Personality = {
  type: 'ENTJ',
  hero: Te,
  parent: Ni,
  child: Se,
  nemesis: Ti,
  inferior: Fi,
  critic: Ne,
  trickster: Si,
  demon: Fe,
  rarity: 1.8,
};

export const estj: Personality = {
  type: 'ESTJ',
  hero: Te,
  parent: Si,
  child: Ne,
  nemesis: Ti,
  inferior: Fi,
  critic: Se,
  trickster: Ni,
  demon: Fe,
  rarity: 8.7,
};

export const enfj: Personality = {
  type: 'ENFJ',
  hero: Fe,
  parent: Ni,
  child: Se,
  nemesis: Fi,
  inferior: Ti,
  critic: Ne,
  trickster: Si,
  demon: Te,
  rarity: 2.5,
};

export const esfj: Personality = {
  type: 'ESFJ',
  hero: Fe,
  parent: Si,
  child: Ne,
  nemesis: Fi,
  inferior: Ti,
  critic: Se,
  trickster: Ni,
  demon: Te,
  rarity: 12.3,
};

export const enfp: Personality = {
  type: 'ENFP',
  hero: Ne,
  parent: Fi,
  child: Te,
  nemesis: Ni,
  inferior: Si,
  critic: Fe,
  trickster: Ti,
  demon: Se,
  rarity: 8.1,
};

export const entp: Personality = {
  type: 'ENTP',
  hero: Ne,
  parent: Ti,
  child: Fe,
  nemesis: Ni,
  inferior: Si,
  critic: Te,
  trickster: Fi,
  demon: Se,
  rarity: 3.2,
};

export const esfp: Personality = {
  type: 'ESFP',
  hero: Se,
  parent: Fi,
  child: Te,
  nemesis: Si,
  inferior: Ni,
  critic: Fe,
  trickster: Ti,
  demon: Ne,
  rarity: 8.5,
};

export const estp: Personality = {
  type: 'ESTP',
  hero: Se,
  parent: Ti,
  child: Fe,
  nemesis: Si,
  inferior: Ni,
  critic: Te,
  trickster: Fi,
  demon: Ne,
  rarity: 4.3,
};

export const infj: Personality = {
  type: 'INFJ',
  hero: Ni,
  parent: Fe,
  child: Ti,
  nemesis: Ne,
  inferior: Se,
  critic: Fi,
  trickster: Te,
  demon: Si,
  rarity: 1.5,
};

export const istj: Personality = {
  type: 'ISTJ',
  hero: Si,
  parent: Te,
  child: Fi,
  nemesis: Se,
  inferior: Ne,
  critic: Ti,
  trickster: Fe,
  demon: Ni,
  rarity: 11.6,
};

export const isfj: Personality = {
  type: 'ISFJ',
  hero: Si,
  parent: Fe,
  child: Ti,
  nemesis: Se,
  inferior: Ne,
  critic: Fi,
  trickster: Te,
  demon: Ni,
  rarity: 13.8,
};

export const intp: Personality = {
  type: 'INTP',
  hero: Ti,
  parent: Ne,
  child: Si,
  nemesis: Te,
  inferior: Fe,
  critic: Ni,
  trickster: Se,
  demon: Fi,
  rarity: 3.3,
};

export const istp: Personality = {
  type: 'ISTP',
  hero: Ti,
  parent: Se,
  child: Ni,
  nemesis: Te,
  inferior: Fe,
  critic: Si,
  trickster: Ne,
  demon: Fi,
  rarity: 5.4,
};

export const infp: Personality = {
  type: 'INFP',
  hero: Fi,
  parent: Ne,
  child: Si,
  nemesis: Fe,
  inferior: Te,
  critic: Ni,
  trickster: Se,
  demon: Ti,
  rarity: 4.4,
};

export const isfp: Personality = {
  type: 'ISFP',
  hero: Fi,
  parent: Se,
  child: Ni,
  nemesis: Fe,
  inferior: Te,
  critic: Si,
  trickster: Ne,
  demon: Ti,
  rarity: 8.8,
};
