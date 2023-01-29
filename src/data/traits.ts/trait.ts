import { PersonalityType } from "../personality-type";
import { traits as intj } from "./intj";
import { traits as esfj } from "./esfj";
import { traits as isfj } from "./isfj";
import { traits as entp } from "./entp";
import { traits as istp } from "./istp";

export interface Trait {
  trait: string;
  description: string;
}

export const traitMap = new Map<PersonalityType, Trait[]>([
  ["INTJ", intj],
  ["ESFJ", esfj],
  ["ISFJ", isfj],
  ["ENTP", entp],
  ["ISTP", istp],
]);
