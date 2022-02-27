import { useState } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';
import { PersonalityDetail } from './personality-detail';
import { PersonalityTypeSelector } from './personality-type-selector';

export const ComparisonPage = () => {
  const selectedTypesState = useState<Personality[]>([]);
  const [selectedTypes] = selectedTypesState;

  const detailComponents = selectedTypes.map((t) => {
    return (
      <td>
        <PersonalityDetail personality={t} />
      </td>
    );
  });

  return (
    <div>
      <PersonalityTypeSelector selectedTypesState={selectedTypesState} />
      <table>
        <tr>{detailComponents}</tr>
      </table>
    </div>
  );
};
