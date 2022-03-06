import { CSSProperties } from 'react';
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
} from '../../data/cognitive-funcion-data';
import { ActivePersonalityTypeSelector } from '../inspect/active-personality-type-selector';
import { Segment } from './segment';

const titles: CSSProperties = {
  textAlign: 'center',
};

interface PersonalityTypeSelectorProps {
  states: ActivePersonalityTypeSelector;
}

export const PersonalityTypeSelector = ({
  states,
}: PersonalityTypeSelectorProps) => {
  const inTypes = [intj, infj, intp, infp];
  const isTypes = [istj, isfj, istp, isfp];
  const enTypes = [entj, enfj, entp, enfp];
  const esTypes = [estj, esfj, estp, esfp];

  return (
    <table>
      <tr>
        <td />
        <td>
          <div style={titles}>Intuitives</div>
        </td>
        <td>
          <div style={titles}>Sensors</div>
        </td>
      </tr>
      <tr>
        <td>Introverted</td>
        <td>
          <Segment types={inTypes} states={states} />
        </td>
        <td>
          <Segment types={isTypes} states={states} />
        </td>
      </tr>
      <tr>
        <td>Extroverted</td>
        <td>
          <Segment types={enTypes} states={states} />
        </td>
        <td>
          <Segment types={esTypes} states={states} />
        </td>
      </tr>
    </table>
  );
};
