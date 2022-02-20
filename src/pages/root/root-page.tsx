import React from 'react';
import { PersonalityTable } from '../../components/personality-table/personality-table';
import { personalities, Personality } from '../../dto/personality';

const introverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('I')
);

const extraverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('E')
);

export const RootPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <PersonalityTable personalities={introverts} title="Introverts:" />
      <PersonalityTable personalities={extraverts} title="Extroverts: " />
    </div>
  );
};
