import React from 'react';
interface Personality {
  type: string;
  hero: CognitiveFunctionType;
  // parent: CognitiveFunctionType
  // child: CognitiveFunctionType
  // inferior: CognitiveFunctionType
  // nemesis: CognitiveFunctionType
  // critic: CognitiveFunctionType
  // trickster: CognitiveFunctionType
  // demon: CognitiveFunctionType
}

enum CognitiveFunctionType {
  Ni,
  Ne,
  Ti,
  Te,
  Si,
  Se,
  Fi,
  Fe,
}

const Ni = CognitiveFunctionType.Ni;
const Si = CognitiveFunctionType.Si;
const Ti = CognitiveFunctionType.Ti;
const Fi = CognitiveFunctionType.Fi;

const Ne = CognitiveFunctionType.Ne;
const Se = CognitiveFunctionType.Se;
const Te = CognitiveFunctionType.Te;
const Fe = CognitiveFunctionType.Fe;

const personalities: Personality[] = [
  { type: 'ENTJ', hero: Te },
  { type: 'ESTJ', hero: Te },
  { type: 'ENFJ', hero: Fe },
  { type: 'ESFJ', hero: Fe },
  { type: 'ENFP', hero: Ne },
  { type: 'ENTP', hero: Ne },
  { type: 'ESFP', hero: Se },
  { type: 'ESTP', hero: Se },
  { type: 'INFJ', hero: Ni },
  { type: 'INTJ', hero: Ni },
  { type: 'ISTJ', hero: Si },
  { type: 'ISFJ', hero: Si },
  { type: 'INTP', hero: Ti },
  { type: 'ISTP', hero: Ti },
  { type: 'INFP', hero: Fi },
  { type: 'ISFP', hero: Fi },
];

//TODO: expose once needed

// const extraverts: Personality[] = personalities.filter((p) =>
//   p.type.startsWith('E')
// );
const introverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('I')
);

const Introverts = (): JSX.Element => {
  const types = introverts.map((p) => <td>{p.type}</td>);
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr>{types}</tr>
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
