import { Fe, Fi, Ne, Ni, Se, Si, Te, Ti } from './cognitive-function-type';
import { Personality } from './personality';

export const intj: Personality = {
  type: 'INTJ',
  name: 'Architect',
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
  name: 'Commander',
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
  name: 'Executive',
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
  name: 'Protagonist',
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
  name: 'Consul',
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
  name: 'Campaigner',
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
  name: 'Debater',
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
  name: 'Entertainer',
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
  name: 'Entrepreneur',
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
  name: 'Advocate',
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
  name: 'Logistician',
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
  name: 'Defender',
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
  name: 'Logician',
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
  name: 'Virtuoso',
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
  name: 'Mediator',
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
  name: 'Adventurer',
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
