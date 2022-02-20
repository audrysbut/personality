import { type } from 'os';
import { CSSProperties } from 'react';
import { Personality } from '../../dto/personality';

interface PersonalityTableProps {
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

export const PersonalityTable = ({
  personalities,
  title,
}: PersonalityTableProps) => {
  const types = personalities.map((p) => (
    <td style={{ ...row, ...mainRow }}>{p.type}</td>
  ));
  const heroes = personalities.map((p) => <td style={row}>{p.hero}</td>);
  const parents = personalities.map((p) => <td style={row}>{p.parent}</td>);
  const children = personalities.map((p) => <td style={row}>{p.child}</td>);

  const type = <TableTitle title="Type:" />;
  const hero = <TableTitle title="Hero:" />;
  const parent = <TableTitle title="Parent:" />;
  const child = <TableTitle title="Parent:" />;

  return (
    <div
      style={{
        paddingRight: '10px',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>{title}</h4>
      <table>
        <tr>{[type, ...types]}</tr>
        <tr>{[hero, ...heroes]}</tr>
        <tr>{[parent, ...parents]}</tr>
        <tr>{[child, ...children]}</tr>
      </table>
    </div>
  );
};
