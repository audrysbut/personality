import React from 'react';
import { CognitiveFunctionTable } from '../../components/cognitive-function-table/cognitive-function-table';
import {
  enfj,
  enfp,
  entj,
  entp,
  esfj,
  esfp,
  estj,
  estp,
  infj,
  infp,
  intj,
  intp,
  isfj,
  isfp,
  istj,
  istp,
} from '../../data/personality';

const introverts = [intj, infj, intp, infp, istj, isfj, istp, isfp];

const extraverts = [entj, enfj, entp, enfp, estj, esfj, estp, esfp];

export const CognitiveFunctionPage = () => {
  return (
    <div>
      <CognitiveFunctionTable personalities={introverts} title="Introverts:" />
      <CognitiveFunctionTable personalities={extraverts} title="Extroverts:" />
    </div>
  );
};
