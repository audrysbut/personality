import { CSSProperties } from 'react';

interface RowColumnProps {
  direct?: boolean;
  informative?: boolean;
  initiative?: boolean;
  responding?: boolean;
  control?: boolean;
  moving?: boolean;
}
export const RowColumn = ({
  direct,
  informative,
  initiative,
  responding,
  control,
  moving,
}: RowColumnProps) => {
  const style: CSSProperties = {
    border: '2px solid black',
    padding: '0.2rem',
    margin: '0.1rem',
    borderRadius: '0.3rem',
    fontSize: '1rem',
    marginBottom: '0.2rem',
  };
  const directRow = direct ? (
    <div style={{ ...style, background: 'violet' }}>Direct</div>
  ) : undefined;
  const informativeRow = informative ? (
    <div style={{ ...style, background: 'lightgreen' }}>Informative</div>
  ) : undefined;
  const initiativeRow = initiative ? (
    <div style={{ ...style, background: 'aqua' }}>Initiative</div>
  ) : undefined;
  const respondingRow = responding ? (
    <div style={{ ...style, background: 'lemonChiffon' }}>Responding</div>
  ) : undefined;
  const controlRow = control ? (
    <div style={{ ...style, background: 'hotpink' }}>Controlling</div>
  ) : undefined;
  const movingRow = moving ? (
    <div style={{ ...style, background: '#9AADFA' }}>Moving</div>
  ) : undefined;
  return (
    <td
      style={{
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <>
        {directRow}
        {informativeRow}
        {initiativeRow}
        {respondingRow}
        {controlRow}
        {movingRow}
      </>
    </td>
  );
};
