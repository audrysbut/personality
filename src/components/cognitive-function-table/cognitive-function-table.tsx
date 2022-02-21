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
  const heroes = personalities.map((p) => <td style={row}>{p.hero}</td>);
  const parents = personalities.map((p) => <td style={row}>{p.parent}</td>);
  const children = personalities.map((p) => <td style={row}>{p.child}</td>);
  const nemesis = personalities.map((p) => <td style={row}>{p.nemesis}</td>);
  const inferiors = personalities.map((p) => <td style={row}>{p.inferior}</td>);
  const critics = personalities.map((p) => <td style={row}>{p.critic}</td>);

  const type = <TableTitle title="Type:" />;
  const hero = <TableTitle title="Hero:" />;
  const parent = <TableTitle title="Parent:" />;
  const child = <TableTitle title="Child:" />;
  const nemesi = <TableTitle title="Nemesis:" />;
  const inferior = <TableTitle title="Inferior:" />;
  const critic = <TableTitle title="Critic:" />;

  return (
    <div
      style={{
        paddingRight: '10px',
      }}
    >
      <h4 style={{ textAlign: 'left', paddingLeft: '10px' }}>{title}</h4>
      <table>
        <tr>{[type, ...types]}</tr>
        <tr>{[hero, ...heroes]}</tr>
        <tr>{[parent, ...parents]}</tr>
        <tr>{[child, ...children]}</tr>
        <tr>{[inferior, ...inferiors]}</tr>
        <tr>{[nemesi, ...nemesis]}</tr>
        <tr>{[critic, ...critics]}</tr>
      </table>
    </div>
  );
};
