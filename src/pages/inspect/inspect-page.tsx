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
import { useActivePersonalityTypes } from './active-personality-type-selector';
import { HeaderColumn } from './header-column';
import { PersonalityRow } from './personality-row';
import { RowColumn } from './row-column';

const inCharge = [estj, estp, entj, enfj];
const starter = [esfj, esfp, entp, enfp];
const seeItThrough = [istj, istp, intj, infj];
const behind = [isfj, isfp, intp, infp];

export const InspectPage = () => {
  const inChargeRow = (
    <RowColumn title="Structure / In Charge" direct initiative control />
  );
  const startersRow = (
    <RowColumn title="Starters" informative initiative moving />
  );
  const sitRow = <RowColumn title="See it through" direct responding moving />;
  const behindRow = (
    <RowColumn title="Behind the scene" informative responding control />
  );

  const states = useActivePersonalityTypes();

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
        <HeaderColumn title="Type" />
        <HeaderColumn title="Guardians (SJ)" />
        <HeaderColumn title="Artisans (SP)" />
        <HeaderColumn title="Intellectuals (NT)" />
        <HeaderColumn title="Idealist (NF)" />
      </tr>
      <tr>{[inChargeRow, ...inChargeRows]}</tr>
      <tr>{[startersRow, ...starters]}</tr>
      <tr>{[sitRow, ...sits]}</tr>
      <tr>{[behindRow, ...behinds]}</tr>
    </table>
  );
};
