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
} from '../../data/cognitive-funcion-data';
import { ActivePersonalityTypeSelector } from './active-personality-type-selector';
import { HeaderColumn } from './header-column';
import { PersonalityRow } from './personality-row';
import { RowColumn } from './row-column';

const inCharge = [estj, estp, entj, enfj];
const starter = [esfj, esfp, entp, enfp];
const seeItThrough = [istj, istp, intj, infj];
const behind = [isfj, isfp, intp, infp];

interface InspectViewProps {
  states: ActivePersonalityTypeSelector;
}

export const InspectTable = ({ states }: InspectViewProps) => {
  const inChargeRow = <RowColumn direct initiative control />;
  const startersRow = <RowColumn informative initiative moving />;
  const sitRow = <RowColumn direct responding moving />;
  const behindRow = <RowColumn informative responding control />;

  const inChargeRows = inCharge.map((p) => (
    <PersonalityRow personality={p} states={states} />
  ));
  const starters = starter.map((p) => (
    <PersonalityRow personality={p} states={states} />
  ));
  const sits = seeItThrough.map((p) => (
    <PersonalityRow personality={p} states={states} />
  ));
  const behinds = behind.map((p) => (
    <PersonalityRow personality={p} states={states} />
  ));

  return (
    <table>
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
    </table>
  );
};
