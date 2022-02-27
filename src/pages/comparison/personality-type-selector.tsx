import { CSSProperties, Dispatch, SetStateAction, useState } from 'react';
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
import { Segment } from './segment';

const titles: CSSProperties = {
  textAlign: 'center',
};

interface PersonalityTypeSelectorProps {
  selectedTypesState: [Personality[], Dispatch<SetStateAction<Personality[]>>];
}

export const PersonalityTypeSelector = ({
  selectedTypesState,
}: PersonalityTypeSelectorProps) => {
  const inTypes = [intj, infj, intp, infp];
  const isTypes = [istj, isfj, istp, isfp];
  const enTypes = [entj, enfj, entp, enfp];
  const esTypes = [estj, esfj, estp, esfp];

  const activeTypeState = useState<Personality | undefined>();

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
        <td>Extroverted</td>
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
