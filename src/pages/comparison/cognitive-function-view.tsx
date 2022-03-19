import { CSSProperties } from 'react';
import { Personality } from '../../data/cognitive-funcion-data';

//TODO: remove this
interface CognitiveFunctionDescriptionProps {
  personality: Personality;
}

const rowStyle: CSSProperties = {
  borderRight: '1px solid black',
};

export const CognitiveFunctionView = ({
  personality,
}: CognitiveFunctionDescriptionProps) => {
  return (
    <table
      style={{
        width: '100%',
        borderBottom: '1px solid black',
        borderTop: '2px solid black',
        borderCollapse: 'collapse',
      }}
    >
      <tr
        style={{
          borderBottom: '1px solid black',
          borderCollapse: 'collapse',
        }}
      >
        <td style={rowStyle}>{personality.hero}</td>
        <td style={rowStyle}>{personality.parent}</td>
        <td style={rowStyle}>{personality.child}</td>
        <td
          style={{
            ...rowStyle,
            borderRight: undefined,
          }}
        >
          {personality.inferior}
        </td>
      </tr>
      <tr>
        <td style={rowStyle}>{personality.nemesis}</td>
        <td style={rowStyle}>{personality.critic}</td>
        <td style={rowStyle}>{personality.trickster}</td>
        <td style={rowStyle}>{personality.demon}</td>
      </tr>
    </table>
  );
};
