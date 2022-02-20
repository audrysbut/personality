import React from 'react';

const personalities: Personality[] = [
  { type: 'ENTJ' },
  { type: 'ESTJ' },
  { type: 'ENFJ' },
  { type: 'ESFJ' },
  { type: 'ENTP' },
  { type: 'ESTP' },
  { type: 'ENFP' },
  { type: 'ESFP' },
  { type: 'INTJ' },
  { type: 'ISTJ' },
  { type: 'INFJ' },
  { type: 'ISFJ' },
  { type: 'INTP' },
  { type: 'ISTP' },
  { type: 'INFP' },
  { type: 'ISFP' },
];

interface Personality {
  type: string;
}

//TODO: expose once needed

// const extraverts: Personality[] = personalities.filter((p) =>
//   p.type.startsWith('E')
// );
const introverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('I')
);

const Introverts = (): JSX.Element => {
  const introvertTable = introverts.map((p) => <td>{p.type}</td>);
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr>{introvertTable}</tr>
      </table>
    </>
  );
};

export const RootPage = () => {
  return (
    <div>
      <h4>Introverts:</h4>
      <Introverts />
    </div>
  );
};
