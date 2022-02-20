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
    <div>
      <h4>Introverts:</h4>
      <PersonalityTable personalities={introverts} />
      <h4>Extroverts:</h4>
      <PersonalityTable personalities={extraverts} />
    </div>
  );
};
