import { CSSProperties } from 'react';
import { Personality } from '../../data/personality';

interface CognitiveFunctionTableProps {
  title: string;
  personalities: Personality[];
}

const row: CSSProperties = {
  width: '70px',
  border: '1px solid black',
  borderRadius: '3px',
  padding: '10px',
};

const mainRow: CSSProperties = {
  background: 'lightgreen',
  fontWeight: 'bold',
};

const mainColumn: CSSProperties = {
  background: 'lightgreen',
};

interface TableTitleProps {
  title: string;
}
const TableTitle = ({ title }: TableTitleProps) => {
  return <td style={{ ...row, ...mainColumn }}>{title}</td>;
};

export const CognitiveFunctionTable = ({
  personalities,
  title,
}: CognitiveFunctionTableProps) => {
  const types = personalities.map((p) => (
    <td style={{ ...row, ...mainRow }}>{p.type}</td>
  ));
  const heroes = personalities.map((p) => <Cell title={p.hero} />);
  const parents = personalities.map((p) => <Cell title={p.parent} />);
  const children = personalities.map((p) => <Cell title={p.child} />);
  const nemesis = personalities.map((p) => <Cell title={p.nemesis} />);
  const inferiors = personalities.map((p) => <Cell title={p.inferior} />);
  const critics = personalities.map((p) => <Cell title={p.critic} />);
  const tricksters = personalities.map((p) => <Cell title={p.trickster} />);
  const demons = personalities.map((p) => <Cell title={p.demon} />);

  const type = <TableTitle title="Type:" />;
  const hero = <TableTitle title="Hero:" />;
  const parent = <TableTitle title="Parent:" />;
  const child = <TableTitle title="Child:" />;
  const nemesi = <TableTitle title="Nemesis:" />;
  const inferior = <TableTitle title="Inferior:" />;
  const critic = <TableTitle title="Critic:" />;
  const tricster = <TableTitle title="Trickster:" />;
  const demon = <TableTitle title="Demon:" />;

  return (
    <div
      style={{
        paddingRight: '10px',
      }}
    >
      <div
        style={{ textAlign: 'left', paddingLeft: '10px', fontWeight: 'bold' }}
      >
        {title}
      </div>
      <table>
        <tr>{[type, ...types]}</tr>
        <tr>{[hero, ...heroes]}</tr>
        <tr>{[parent, ...parents]}</tr>
        <tr>{[child, ...children]}</tr>
        <tr>{[inferior, ...inferiors]}</tr>
        <tr>{[nemesi, ...nemesis]}</tr>
        <tr>{[critic, ...critics]}</tr>
        <tr>{[tricster, ...tricksters]}</tr>
        <tr>{[demon, ...demons]}</tr>
      </table>
    </div>
  );
};

interface CellProperties {
  title: string;
}

const Cell = ({ title }: CellProperties) => {
  return <td style={row}>{title}</td>;
};
