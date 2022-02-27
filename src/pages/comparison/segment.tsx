import { Dispatch, SetStateAction } from 'react';
import { Personality } from '../../data/personality';
import { Cell } from './cell';

interface SegmentProps {
  types: Personality[];
  activeTypeState: [
    Personality | undefined,
    Dispatch<SetStateAction<Personality | undefined>>
  ];
  selectedTypesState: [Personality[], Dispatch<SetStateAction<Personality[]>>];
}
export const Segment = ({
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
