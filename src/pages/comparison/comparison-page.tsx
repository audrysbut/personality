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

interface CellProps {
  personality: Personality;
  activeTypeState: [string, Dispatch<SetStateAction<string>>];
  selectedTypesState: [string[], Dispatch<SetStateAction<string[]>>];
}
const Cell = ({
  personality,
  activeTypeState,
  selectedTypesState,
}: CellProps) => {
  const [activeType, setActiveType] = activeTypeState;
  const [selectedTypes, setSelectedTypes] = selectedTypesState;
  const isActive = activeType === personality.type;
  const selected = selectedTypes.includes(personality.type);

  const getColor = (): string => {
    const type = personality.type;
    const intuitive = type[1] === 'N';
    const sensor = type[1] === 'S';
    const thinker = type[2] === 'T';
    const feeler = type[2] === 'F';
    const judger = type[3] === 'J';
    const perceiver = type[3] === 'P';

    const mark = isActive || selected;

    const analytic = intuitive && thinker;
    if (analytic && mark) {
      return 'violet';
    }

    const diplomat = intuitive && feeler;
    if (diplomat && mark) {
      return 'lightgreen';
    }

    const sentinel = sensor && judger;
    if (sentinel && mark) {
      return 'lightblue';
    }

    if (perceiver && mark) {
      return 'yellow';
    }
    return 'white';
  };

  const style: CSSProperties = {
    background: getColor(),
    width: '6rem',
    height: '3rem',
    textAlign: 'center',
    lineHeight: '3rem',
    border: '2px solid black',
    borderRadius: '6px',
  };

  const onClick = () => {
    const type = personality.type;
    const contains = selectedTypes.includes(type);

    setSelectedTypes((prev) => {
      if (contains) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };
  return (
    <div
      style={style}
      onMouseOver={() => setActiveType(personality.type)}
      onMouseOut={() => setActiveType('')}
      onClick={onClick}
    >
      {personality.type}
    </div>
  );
};

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
