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
  // trickster: CognitiveFunctionType
  // demon: CognitiveFunctionType
}

export const personalities: Personality[] = [
  {
    type: 'ENTJ',
    hero: Te,
    parent: Ni,
    child: Se,
    nemesis: Ti,
    inferior: Fi,
    critic: Ne,
  },
  {
    type: 'ESTJ',
    hero: Te,
    parent: Si,
    child: Ne,
    nemesis: Ti,
    inferior: Fi,
    critic: Se,
  },
  {
    type: 'ENFJ',
    hero: Fe,
    parent: Ni,
    child: Se,
    nemesis: Fi,
    inferior: Ti,
    critic: Ne,
  },
  {
    type: 'ESFJ',
    hero: Fe,
    parent: Si,
    child: Ne,
    nemesis: Fi,
    inferior: Ti,
    critic: Se,
  },
  {
    type: 'ENFP',
    hero: Ne,
    parent: Fi,
    child: Te,
    nemesis: Ni,
    inferior: Si,
    critic: Fe,
  },
  {
    type: 'ENTP',
    hero: Ne,
    parent: Ti,
    child: Fe,
    nemesis: Ni,
    inferior: Si,
    critic: Te,
  },
  {
    type: 'ESFP',
    hero: Se,
    parent: Fi,
    child: Te,
    nemesis: Si,
    inferior: Ni,
    critic: Fe,
  },
  {
    type: 'ESTP',
    hero: Se,
    parent: Ti,
    child: Fe,
    nemesis: Si,
    inferior: Ni,
    critic: Te,
  },
  {
    type: 'INFJ',
    hero: Ni,
    parent: Fe,
    child: Ti,
    nemesis: Ne,
    inferior: Se,
    critic: Fi,
  },
  {
    type: 'INTJ',
    hero: Ni,
    parent: Te,
    child: Fi,
    nemesis: Ne,
    inferior: Se,
    critic: Ti,
  },
  {
    type: 'ISTJ',
    hero: Si,
    parent: Te,
    child: Fi,
    nemesis: Se,
    inferior: Ne,
    critic: Ti,
  },
  {
    type: 'ISFJ',
    hero: Si,
    parent: Fe,
    child: Ti,
    nemesis: Se,
    inferior: Ne,
    critic: Fi,
  },
  {
    type: 'INTP',
    hero: Ti,
    parent: Ne,
    child: Si,
    nemesis: Te,
    inferior: Fe,
    critic: Ni,
  },
  {
    type: 'ISTP',
    hero: Ti,
    parent: Se,
    child: Ni,
    nemesis: Te,
    inferior: Fe,
    critic: Si,
  },
  {
    type: 'INFP',
    hero: Fi,
    parent: Ne,
    child: Si,
    nemesis: Fe,
    inferior: Te,
    critic: Ni,
  },
  {
    type: 'ISFP',
    hero: Fi,
    parent: Se,
    child: Ni,
    nemesis: Fe,
    inferior: Te,
    critic: Si,
  },
];
