import { CSSProperties, useState, Dispatch, SetStateAction } from 'react';
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
  Personality,
} from '../../data/personality';
import { Cell } from './cell';

interface SegmentProps {
  types: Personality[];
  activeTypeState: [string, Dispatch<SetStateAction<string>>];
  selectedTypesState: [string[], Dispatch<SetStateAction<string[]>>];
}
const Segment = ({
  types,
  activeTypeState,
  selectedTypesState,
}: SegmentProps) => {
  const [type1, type2, type3, type4] = types;
  return (
    <table>
      <tr>
        <td>
          <Cell
            personality={type1}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
        <td>
          <Cell
            personality={type2}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Cell
            personality={type3}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
        <td>
          <Cell
            personality={type4}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
      </tr>
    </table>
  );
};

const titles: CSSProperties = {
  textAlign: 'center',
};

export const ComparisonPage = () => {
  const inTypes = [intj, infj, intp, infp];
  const isTypes = [istj, isfj, istp, isfp];
  const enTypes = [entj, enfj, entp, enfp];
  const esTypes = [estj, esfj, estp, esfp];

  const activeTypeState = useState('');
  const selectedTypesState = useState<string[]>([]);
  return (
    <table>
      <tr>
        <td />
        <td>
          <div style={titles}>Intuitives</div>
        </td>
        <div style={titles}>Sensors</div>
      </tr>
      <tr>
        <td>Introverted</td>
        <td>
          <Segment
            types={inTypes}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
        <td>
          <Segment
            types={isTypes}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
      </tr>
      <tr>
        <td>
          <div>Extroverted</div>
        </td>
        <td>
          <Segment
            types={enTypes}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
        <td>
          <Segment
            types={esTypes}
            activeTypeState={activeTypeState}
            selectedTypesState={selectedTypesState}
          />
        </td>
      </tr>
    </table>
  );
};
