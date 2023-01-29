import { PersonalityType } from "../personality-type";
import { traits as intj } from "./intj";
import { traits as esfj } from "./esfj";
import { traits as isfj } from "./isfj";
import { traits as entp } from "./entp";
import { traits as istp } from "./istp";
import { traits as infp } from "./infp";
import { traits as intp } from "./intp";
import { traits as estj } from "./estj";
import { traits as esfp } from "./esfp";
import { traits as estp } from "./estp";
import { traits as istj } from "./istj";

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
  ["INFP", infp],
  ["INTP", intp],
  ["ESTJ", estj],
  ["ESFP", esfp],
  ["ESTP", estp],
  ["ISTJ", istj],
]);
