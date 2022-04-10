import { CongnitiveFunctionIcon } from '../../components/cognitive-function-icon/cognitive-function-icon';
import {
  CognitiveFunctionType,
  Personality,
} from '../../data/cognitive-funcion-data';
import {
  child,
  CogntiveFunctionPosition,
  getCognitiveFunctionData,
  hero,
  inferior,
  parent,
} from '../../data/cognitive-function-roles';
import { ActivePersonalityTypeSelector } from '../../pages/inspect/active-personality-type-selector';
import { PersonalityDetailTitle } from './personality-detail-title';

interface PersonalityDetailProps {
  personality: Personality;
  states: ActivePersonalityTypeSelector;
}

export const PersonalityDetail = ({
  personality,
  states,
}: PersonalityDetailProps) => {
  return (
    <div
      style={{
        minWidth: '15rem',
        border: '2px solid black',
        marginRight: '1rem',
        paddingBottom: '0.5em',
        textAlign: 'center',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
    >
      <PersonalityDetailTitle personality={personality} states={states} />
      <CognitiveFunctionDescriptions personality={personality} />
    </div>
  );
};

const CognitiveFunctionDescriptions = ({
  personality,
}: CognitiveFunctionDescriptionsProps) => {
  const { hero, parent, child, inferior, nemesis, critic, trickster, demon } =
    personality;

  return (
    <>
      <SingleCognitiveFunction
        cognitiveFunction={hero}
        position={CogntiveFunctionPosition.hero}
      />
      <SingleCognitiveFunction
        cognitiveFunction={parent}
        position={CogntiveFunctionPosition.parent}
      />
      <SingleCognitiveFunction
        cognitiveFunction={child}
        position={CogntiveFunctionPosition.child}
      />
      <SingleCognitiveFunction
        cognitiveFunction={inferior}
        position={CogntiveFunctionPosition.inferior}
      />
      <SingleCognitiveFunction
        cognitiveFunction={nemesis}
        position={CogntiveFunctionPosition.nemesis}
      />
      <SingleCognitiveFunction
        cognitiveFunction={critic}
        position={CogntiveFunctionPosition.critic}
      />
      <SingleCognitiveFunction
        cognitiveFunction={trickster}
        position={CogntiveFunctionPosition.trickster}
      />
      <SingleCognitiveFunction
        cognitiveFunction={demon}
        position={CogntiveFunctionPosition.demon}
      />
    </>
  );
};

interface SingleCognitiveFunctionProps {
  position: CogntiveFunctionPosition;
  cognitiveFunction: CognitiveFunctionType;
}

const mainStackColor =
  'linear-gradient(to right, white, rgba(0,255,0,0.3), white)';
const shadowStackColor =
  'linear-gradient(to right, white, rgba(0,0,0,0.3), white)';

const SingleCognitiveFunction = ({
  cognitiveFunction,
  position,
}: SingleCognitiveFunctionProps) => {
  const data = getCognitiveFunctionData(cognitiveFunction);
  if (!data) {
    return (
      <div
        style={{
          color: 'red',
        }}
      >
        No Data Available
      </div>
    );
  }
  const traitsView = data.traits.map((t) => <div>{`* ${t}`}</div>);
  const visibleText = () => {
    return (
      <>
        <span
          style={{
            marginLeft: '0.3rem',
            fontWeight: 'bold',
          }}
        >
          {data.value}
        </span>
        <span
          style={{
            marginLeft: '0.2rem',
            fontWeight: 'normal',
          }}
        >
          {`(${cognitiveFunction})`}
        </span>
        <span
          style={{
            fontWeight: 'normal',
            marginLeft: '0.1rem',
          }}
        >
          {`[${position}]`}
        </span>
      </>
    );
  };

  const isMainStack = [hero, parent, child, inferior].includes(position);
  const color = isMainStack ? mainStackColor : shadowStackColor;
  return (
    <>
      <div
        style={{
          borderBottom: '1px solid black',
          borderTop: '1px solid black',
          fontWeight: 'bold',
          background: color,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 auto',
            width: '90%',
            userSelect: 'none',
          }}
        >
          <CongnitiveFunctionIcon
            cognitiveFunction={cognitiveFunction}
            position={position}
          />
          {visibleText()}
        </div>
      </div>
      <div
        style={{
          textAlign: 'left',
          paddingLeft: '0.2rem',
        }}
      >
        {traitsView}
      </div>
    </>
  );
};

interface CognitiveFunctionDescriptionsProps {
  personality: Personality;
}
