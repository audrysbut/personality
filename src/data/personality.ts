enum CognitiveFunctionType {
  Ni = 'Ni',
  Ne = 'Ne',
  Ti = 'Ti',
  Te = 'Te',
  Si = 'Si',
  Se = 'Se',
  Fi = 'Fi',
  Fe = 'Fe',
}

const Ni = CognitiveFunctionType.Ni;
const Si = CognitiveFunctionType.Si;
const Ti = CognitiveFunctionType.Ti;
const Fi = CognitiveFunctionType.Fi;

const Ne = CognitiveFunctionType.Ne;
const Se = CognitiveFunctionType.Se;
const Te = CognitiveFunctionType.Te;
const Fe = CognitiveFunctionType.Fe;

export interface Personality {
  type: string;
  hero: CognitiveFunctionType;
  parent: CognitiveFunctionType;
  child: CognitiveFunctionType;
  inferior: CognitiveFunctionType;
  nemesis: CognitiveFunctionType;
  critic: CognitiveFunctionType;
  trickster: CognitiveFunctionType;
  demon: CognitiveFunctionType;
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
};
