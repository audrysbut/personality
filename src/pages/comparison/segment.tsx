import { Personality } from '../../data/cognitive-funcion-data';
import { ActivePersonalityTypeSelector } from '../inspect/active-personality-type-selector';
import { Cell } from './cell';

interface SegmentProps {
  types: Personality[];
  states: ActivePersonalityTypeSelector;
}
export const Segment = ({ types, states }: SegmentProps) => {
  const [type1, type2, type3, type4] = types;
  return (
    <table>
      <tr>
        <td>
          <Cell personality={type1} states={states} />
        </td>
        <td>
          <Cell personality={type2} states={states} />
        </td>
      </tr>
      <tr>
        <td>
          <Cell personality={type3} states={states} />
        </td>
        <td>
          <Cell personality={type4} states={states} />
        </td>
      </tr>
    </table>
  );
};
