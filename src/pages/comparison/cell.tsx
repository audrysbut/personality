import { Dispatch, SetStateAction } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';

interface CellProps {
  personality: Personality;
  activeTypeState: [
    Personality | undefined,
    Dispatch<SetStateAction<Personality | undefined>>
  ];
  selectedTypesState: [Personality[], Dispatch<SetStateAction<Personality[]>>];
}

export const Cell = ({
  personality,
  activeTypeState,
  selectedTypesState,
}: CellProps) => {
  const [activeType, setActiveType] = activeTypeState;
  const [selectedTypes, setSelectedTypes] = selectedTypesState;
  const isActive = activeType === personality;
  const selected = selectedTypes.includes(personality);

  const onClick = () => {
    const contains = selectedTypes.includes(personality);

    setSelectedTypes((prev) => {
      if (contains) {
        return prev.filter((t) => t !== personality);
      }

      // if (prev.length === 2) {
      //   return prev;
      // }

      return [...prev, personality];
    });
  };
  return (
    <div
      onMouseOver={() => setActiveType(personality)}
      onMouseOut={() => setActiveType(undefined)}
      onClick={onClick}
      style={{
        background: getPersonalityTypeColor(personality, selected, isActive),
        width: '6rem',
        height: '3rem',
        border: '2px solid black',
        borderRadius: '6px',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '6rem',
          height: '3rem',
          textAlign: 'center',
          lineHeight: '3rem',
          fontWeight: isActive ? 'bold' : 'initial',
        }}
      >
        {personality.type}
      </div>
    </div>
  );
};

export function getPersonalityTypeColor(
  personality: Personality,
  selected: boolean,
  isActive: boolean
): string {
  const type = personality.type;
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
