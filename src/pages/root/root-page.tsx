import React, { useState } from 'react';
import { CognitiveFunctionTable } from '../../components/cognitive-function-table/cognitive-function-table';
import { personalities, Personality } from '../../data/personality';

const introverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('I')
);

const extraverts: Personality[] = personalities.filter((p) =>
  p.type.startsWith('E')
);

export const RootPage = () => {
  const state = useState('');
  return (
    <div>
      <CognitiveFunctionTable
        personalities={introverts}
        title="Introverts:"
        state={state}
      />
      <CognitiveFunctionTable
        personalities={extraverts}
        title="Extroverts:"
        state={state}
      />
    </div>
  );
};
