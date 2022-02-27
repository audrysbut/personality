import React, { CSSProperties, useState } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';

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

const activeRow: CSSProperties = {
  width: '70px',
  border: '1px solid black',
  borderRadius: '3px',
  padding: '10px',
  background: 'lightblue',
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
  const state = useState('');
  const types = personalities.map((p) => (
    <td style={{ ...row, ...mainRow }}>{p.type}</td>
  ));
  const heroes = personalities.map((p) => (
    <Cell personality={p} state={state} hero />
  ));
  const parents = personalities.map((p) => (
    <Cell personality={p} state={state} parent />
  ));
  const children = personalities.map((p) => (
    <Cell personality={p} state={state} child />
  ));
  const nemesis = personalities.map((p) => (
    <Cell personality={p} state={state} nemesis />
  ));
  const inferiors = personalities.map((p) => (
    <Cell personality={p} state={state} inferior />
  ));
  const critics = personalities.map((p) => (
    <Cell personality={p} state={state} critic />
  ));
  const tricksters = personalities.map((p) => (
    <Cell personality={p} state={state} trickster />
  ));
  const demons = personalities.map((p) => (
    <Cell personality={p} state={state} demon />
  ));

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
  personality: Personality;
  state: [string, React.Dispatch<React.SetStateAction<string>>];
  hero?: boolean;
  parent?: boolean;
  child?: boolean;
  inferior?: boolean;
  nemesis?: boolean;
  critic?: boolean;
  trickster?: boolean;
  demon?: boolean;
}

const Cell = (p: CellProperties) => {
  const [state, setState] = p.state;
  const isActive = p.personality.type === state;
  const style = isActive ? activeRow : row;

  const getTitle = () => {
    if (p.hero) {
      return p.personality.hero;
    }
    if (p.parent) {
      return p.personality.parent;
    }
    if (p.child) {
      return p.personality.child;
    }
    if (p.inferior) {
      return p.personality.inferior;
    }
    if (p.nemesis) {
      return p.personality.nemesis;
    }
    if (p.trickster) {
      return p.personality.trickster;
    }
    if (p.critic) {
      return p.personality.critic;
    }
    if (p.demon) {
      return p.personality.demon;
    }
  };
  const title = getTitle();
  return (
    <td
      style={style}
      onMouseOver={() => {
        setState(p.personality.type);
      }}
      onMouseOut={() => {
        setState('');
      }}
    >
      {title}
    </td>
  );
};
