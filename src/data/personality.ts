import { CognitiveFunctionType } from './cognitive-function-type';
import { PersonalityType } from './personality-type';

export interface Personality {
  type: PersonalityType;
  name: string
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
