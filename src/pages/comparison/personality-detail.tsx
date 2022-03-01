import {
  CognitiveFunctionType,
  Personality,
} from '../../data/cognitive-funcion-data';
import {
  CogntiveFunctionPosition,
  getCognitiveFunctionData,
} from '../../data/cognitive-function-roles';
import { CognitiveFunctionView } from './cognitive-function-view';
import { PersonalityDetailTitle } from './personality-detail-title';

interface PersonalityDetailProps {
  personality: Personality;
}

export const PersonalityDetail = ({ personality }: PersonalityDetailProps) => {
  return (
    <div
      style={{
        width: '15rem',
        border: '2px solid black',
        marginRight: '1rem',
        paddingBottom: '0.5em',
        textAlign: 'center',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
    >
      <PersonalityDetailTitle personality={personality} />
      <CognitiveFunctionView personality={personality} />
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
  return (
    <>
      <div
        style={{
          fontWeight: 'bold',
          borderBottom: '1px solid black',
          borderTop: '1px solid black',
        }}
      >
        {cognitiveFunction}
        <span
          style={{
            fontWeight: 'initial',
          }}
        >
          {` (${position})`}
        </span>
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
