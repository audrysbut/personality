import { Dispatch, SetStateAction } from 'react';
import { Personality } from '../../data/personality';
import { CellIndexIndicator } from './cell-index-indicator';

interface CellProps {
  personality: Personality;
  activeTypeState: [string, Dispatch<SetStateAction<string>>];
  selectedTypesState: [string[], Dispatch<SetStateAction<string[]>>];
}

export const Cell = ({
  personality,
  activeTypeState,
  selectedTypesState,
}: CellProps) => {
  const [activeType, setActiveType] = activeTypeState;
  const [selectedTypes, setSelectedTypes] = selectedTypesState;
  const isActive = activeType === personality.type;
  const selected = selectedTypes.includes(personality.type);

  const onClick = () => {
    const type = personality.type;
    const contains = selectedTypes.includes(type);

    setSelectedTypes((prev) => {
      if (contains) {
        return prev.filter((t) => t !== type);
      }

      if (prev.length === 2) {
        return prev;
      }

      return [...prev, type];
    });
  };
  return (
    <div
      onMouseOver={() => setActiveType(personality.type)}
      onMouseOut={() => setActiveType('')}
      onClick={onClick}
      style={{
        background: getColor(personality.type, selected, isActive),
        width: '6rem',
        height: '3rem',
        border: '2px solid black',
        borderRadius: '6px',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {selected && (
        <CellIndexIndicator
          personality={personality}
          selectedTypes={selectedTypes}
        />
      )}
      <div
        style={{
          width: '6rem',
          height: '3rem',
          textAlign: 'center',
          lineHeight: '3rem',
          fontWeight: isActive ? 'bold' : 'initial',
          position: 'absolute',
        }}
      >
        {personality.type}
      </div>
    </div>
  );
};

function getColor(type: string, selected: boolean, isActive: boolean): string {
  const intuitive = type[1] === 'N';
  const sensor = type[1] === 'S';
  const thinker = type[2] === 'T';
  const feeler = type[2] === 'F';
  const judger = type[3] === 'J';
  const perceiver = type[3] === 'P';

  const analytic = intuitive && thinker;
  if (analytic && selected) {
    return 'violet';
  }

  const diplomat = intuitive && feeler;
  if (diplomat && selected) {
    return 'lightgreen';
  }

  const sentinel = sensor && judger;
  if (sentinel && selected) {
    return 'lightblue';
  }

  if (perceiver && selected) {
    return 'yellow';
  }

  if (isActive) {
    return 'lightgray';
  }

  return 'white';
}
