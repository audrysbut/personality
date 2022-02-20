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
  // inferior: CognitiveFunctionType
  // nemesis: CognitiveFunctionType
  // critic: CognitiveFunctionType
  // trickster: CognitiveFunctionType
  // demon: CognitiveFunctionType
}

export const personalities: Personality[] = [
  { type: 'ENTJ', hero: Te, parent: Ni, child: Se },
  { type: 'ESTJ', hero: Te, parent: Si, child: Ne },
  { type: 'ENFJ', hero: Fe, parent: Ni, child: Se },
  { type: 'ESFJ', hero: Fe, parent: Si, child: Ne },
  { type: 'ENFP', hero: Ne, parent: Fi, child: Te },
  { type: 'ENTP', hero: Ne, parent: Ti, child: Fe },
  { type: 'ESFP', hero: Se, parent: Fi, child: Te },
  { type: 'ESTP', hero: Se, parent: Ti, child: Fe },
  { type: 'INFJ', hero: Ni, parent: Fe, child: Ti },
  { type: 'INTJ', hero: Ni, parent: Te, child: Fi },
  { type: 'ISTJ', hero: Si, parent: Te, child: Fi },
  { type: 'ISFJ', hero: Si, parent: Fe, child: Ti },
  { type: 'INTP', hero: Ti, parent: Ne, child: Si },
  { type: 'ISTP', hero: Ti, parent: Se, child: Ni },
  { type: 'INFP', hero: Fi, parent: Ne, child: Si },
  { type: 'ISFP', hero: Fi, parent: Se, child: Ni },
];
