import {
  enfj,
  enfp,
  entj,
  entp,
  esfj,
  esfp,
  estj,
  estp,
  infj,
  infp,
  intj,
  intp,
  isfj,
  isfp,
  istj,
  istp,
} from "../../data/personality-data";
import { ActivePersonalityTypeSelector } from "./active-personality-type-selector";
import { HeaderColumn } from "./header-column";
import { PersonalityRow } from "./personality-row";
import { RowColumn } from "./row-column";

const inCharge = [estj, estp, entj, enfj];
const starter = [esfj, esfp, entp, enfp];
const seeItThrough = [istj, istp, intj, infj];
const behind = [isfj, isfp, intp, infp];

interface InspectViewProps {
  states: ActivePersonalityTypeSelector;
}

export const InspectTable = ({ states }: InspectViewProps) => {
  const inChargeRow = <RowColumn direct initiative control key="dic" />;
  const startersRow = <RowColumn informative initiative moving key="iim" />;
  const sitRow = <RowColumn direct responding moving key="drm" />;
  const behindRow = <RowColumn informative responding control key="irc" />;

  const inChargeRows = inCharge.map((p) => (
    <PersonalityRow personality={p} states={states} key={p.type} />
  ));
  const starters = starter.map((p) => (
    <PersonalityRow personality={p} states={states} key={p.type} />
  ));
  const sits = seeItThrough.map((p) => (
    <PersonalityRow personality={p} states={states} key={p.type} />
  ));
  const behinds = behind.map((p) => (
    <PersonalityRow personality={p} states={states} key={p.type} />
  ));

  return (
    <table>
      <tbody>
        <tr>
          <HeaderColumn title="Comunication style" />
          <HeaderColumn title="Guardians" />
          <HeaderColumn title="Explorers" />
          <HeaderColumn title="Analytics" />
          <HeaderColumn title="Diplomats" />
        </tr>
        <tr>{[inChargeRow, ...inChargeRows]}</tr>
        <tr>{[startersRow, ...starters]}</tr>
        <tr>{[sitRow, ...sits]}</tr>
        <tr>{[behindRow, ...behinds]}</tr>
      </tbody>
    </table>
  );
};
