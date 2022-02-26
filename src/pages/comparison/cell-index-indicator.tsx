import { Personality } from '../../data/personality';

interface CellIndexIndicatorProps {
  selectedTypes: string[];
  personality: Personality;
}

export const CellIndexIndicator = ({
  selectedTypes,
  personality,
}: CellIndexIndicatorProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '0.5rem',
        top: '0.1rem',
        background: 'rgba(0,0,0,0.2)',
        padding: '0.1rem',
        borderRadius: '3px',
      }}
    >
      {selectedTypes.indexOf(personality.type) + 1}
    </div>
  );
};
