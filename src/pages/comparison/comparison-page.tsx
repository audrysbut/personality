import { useActivePersonalityTypes } from '../inspect/active-personality-type-selector';
import { PersonalityDetail } from './personality-detail';
import { PersonalityTypeSelector } from './personality-type-selector';

export const ComparisonPage = () => {
  const states = useActivePersonalityTypes();
  const { activePersonalities } = states;
  const detailComponents = activePersonalities.map((t) => {
    return (
      <td>
        <PersonalityDetail personality={t} states={states} />
      </td>
    );
  });

  return (
    <div>
      <PersonalityTypeSelector states={states} />
      <table>
        <tr>{detailComponents}</tr>
      </table>
    </div>
  );
};
