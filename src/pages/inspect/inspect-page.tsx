import { CSSProperties } from 'react';
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
  Personality,
} from '../../data/cognitive-funcion-data';

interface HeaderColumnProps {
  title: string;
}
const HeaderColumn = ({ title }: HeaderColumnProps) => {
  return (
    <th
      style={{
        border: '1px solid black',
      }}
    >
      {title}
    </th>
  );
};

interface RowColumnProps {
  title: string;
  direct?: boolean;
  informative?: boolean;
  initiative?: boolean;
  responding?: boolean;
  control?: boolean;
  moving?: boolean;
}
const RowColumn = ({
  title,
  direct,
  informative,
  initiative,
  responding,
  control,
  moving,
}: RowColumnProps) => {
  const style: CSSProperties = {
    border: '2px solid black',
    padding: '0.2rem',
    margin: '0.1rem',
    borderRadius: '0.3rem',
    fontSize: '1rem',
  };
  const directRow = direct ? (
    <div style={{ ...style, background: 'violet' }}>Direct</div>
  ) : undefined;
  const informativeRow = informative ? (
    <div style={{ ...style, background: 'lightgreen' }}>Informative</div>
  ) : undefined;
  const initiativeRow = initiative ? (
    <div style={{ ...style, background: 'aqua' }}>Initiative</div>
  ) : undefined;
  const respondingRow = responding ? (
    <div style={{ ...style, background: 'lemonChiffon' }}>Responding</div>
  ) : undefined;
  const controlRow = control ? (
    <div style={{ ...style, background: 'hotpink' }}>Controlling</div>
  ) : undefined;
  const movingRow = moving ? (
    <div style={{ ...style, background: '#9AADFA' }}>Moving</div>
  ) : undefined;
  return (
    <td
      style={{
        border: '1px solid black',
        fontSize: '1.2rem',
      }}
    >
      {title}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {directRow}
        {informativeRow}
        {initiativeRow}
        {respondingRow}
        {controlRow}
        {movingRow}
      </div>
    </td>
  );
};

const inCharge = [estj, estp, entj, enfj];
const starter = [esfj, esfp, entp, enfp];
const seeItThrough = [istj, istp, intj, infj];
const behind = [isfj, isfp, intp, infp];

// const directTypes = [...inCharge, ...seeItThrough];
// const informativeType = [...starter, ...behind];

// const initiativeTypes = [...inCharge, ...seeItThrough];
// const respondingTypes = [...seeItThrough, ...behind];

// const controlTypes = [...inCharge, ...behind];
// const movableTypes = [...starter, ...seeItThrough];

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

  const inChargeRows = inCharge.map((p) => <PersonalityRow personality={p} />);
  const starters = starter.map((p) => <PersonalityRow personality={p} />);
  const sits = seeItThrough.map((p) => <PersonalityRow personality={p} />);
  const behinds = behind.map((p) => <PersonalityRow personality={p} />);
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

interface PersonalityRowProps {
  personality: Personality;
}

const PersonalityRow = ({ personality }: PersonalityRowProps) => {
  return (
    <td
      style={{
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      {personality.type}
    </td>
  );
};
