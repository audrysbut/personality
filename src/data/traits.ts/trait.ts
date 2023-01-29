import { PersonalityType } from "../personality-type";
import { traits as intj } from "./intj";
import { traits as esfj } from "./esfj";

export interface Trait {
  trait: string;
  description: string;
}

export const traitMap = new Map<PersonalityType, Trait[]>([
  ["INTJ", intj],
  ["ESFJ", esfj],
]);
