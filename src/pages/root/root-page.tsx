import React from 'react';
interface Personality {
  type: string;
  hero: CognitiveFunctionType;
  parent: CognitiveFunctionType;
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
  { type: 'ENTJ', hero: Te, parent: Ni },
  { type: 'ESTJ', hero: Te, parent: Si },
  { type: 'ENFJ', hero: Fe, parent: Ni },
  { type: 'ESFJ', hero: Fe, parent: Si },
  { type: 'ENFP', hero: Ne, parent: Fi },
  { type: 'ENTP', hero: Ne, parent: Ti },
  { type: 'ESFP', hero: Se, parent: Fi },
  { type: 'ESTP', hero: Se, parent: Ti },
  { type: 'INFJ', hero: Ni, parent: Fe },
  { type: 'INTJ', hero: Ni, parent: Te },
  { type: 'ISTJ', hero: Si, parent: Te },
  { type: 'ISFJ', hero: Si, parent: Fe },
  { type: 'INTP', hero: Ti, parent: Ne },
  { type: 'ISTP', hero: Ti, parent: Se },
  { type: 'INFP', hero: Fi, parent: Ne },
  { type: 'ISFP', hero: Fi, parent: Se },
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
