import { Personality } from '../../dto/personality';

interface PersonalityTableProps {
  personalities: Personality[];
}
export const PersonalityTable = ({ personalities }: PersonalityTableProps) => {
  const types = personalities.map((p) => <td>{p.type}</td>);
  const heroes = personalities.map((p) => <td>{p.hero}</td>);
  const parents = personalities.map((p) => <td>{p.parent}</td>);
  const children = personalities.map((p) => <td>{p.child}</td>);
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr>{['Type:', ...types]}</tr>
        <tr>{['Hero:', ...heroes]}</tr>
        <tr>{['Parent:', ...parents]}</tr>
        <tr>{['Child:', ...children]}</tr>
      </table>
    </>
  );
};
