import { useState } from 'react';
import { CognitiveFunctionIcon } from '../../components/cognitive-function-icon/cognitive-function-icon';
import {
  CognitiveFunctionPosition,
  getCognitiveFunctionData,
} from '../../data/cognitive-function-roles';
import { CognitiveFunctionType } from '../../data/cognitive-function-type';
import { Personality } from '../../data/personality';
import { ActivePersonalityTypeSelector } from '../../pages/inspect/active-personality-type-selector';
import { isMainStackPosition } from '../../tools/personality-tools';
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
  const {
    hero,
    parent,
    child,
    inferior,
    nemesis,
    critic,
    trickster,
    demon,
    type,
  } = personality;

  return (
    <>
      <SingleCognitiveFunction
        key={type + hero}
        cognitiveFunction={hero}
        position={CognitiveFunctionPosition.hero}
      />
      <SingleCognitiveFunction
        key={type + parent}
        cognitiveFunction={parent}
        position={CognitiveFunctionPosition.parent}
      />
      <SingleCognitiveFunction
        key={type + child}
        cognitiveFunction={child}
        position={CognitiveFunctionPosition.child}
      />
      <SingleCognitiveFunction
        key={type + inferior}
        cognitiveFunction={inferior}
        position={CognitiveFunctionPosition.inferior}
      />
      <SingleCognitiveFunction
        key={type + nemesis}
        cognitiveFunction={nemesis}
        position={CognitiveFunctionPosition.nemesis}
      />
      <SingleCognitiveFunction
        key={type + critic}
        cognitiveFunction={critic}
        position={CognitiveFunctionPosition.critic}
      />
      <SingleCognitiveFunction
        key={type + trickster}
        cognitiveFunction={trickster}
        position={CognitiveFunctionPosition.trickster}
      />
      <SingleCognitiveFunction
        key={type + demon}
        cognitiveFunction={demon}
        position={CognitiveFunctionPosition.demon}
      />
    </>
  );
};

interface SingleCognitiveFunctionProps {
  position: CognitiveFunctionPosition;
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
  const isMainStack = isMainStackPosition(position);
  const color = isMainStack ? mainStackColor : shadowStackColor;
  const [viewTraits, setViewTraits] = useState(isMainStack);
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
  const traitsView =
    viewTraits && data.traits.map((t) => <div>{`* ${t}`}</div>);

  return (
    <>
      <div
        style={{
          borderBottom: '1px solid black',
          borderTop: '1px solid black',
          fontWeight: 'bold',
          background: color,
        }}
        onClick={() => setViewTraits((prev) => !prev)}
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
          <CognitiveFunctionIcon
            cognitiveFunction={cognitiveFunction}
            position={position}
          />
          <CognitiveFunctionTitle
            value={data.value}
            cognitiveFunction={cognitiveFunction}
            position={position}
          />
        </div>
      </div>
      <div
        style={{
          paddingBottom: '0.06rem',
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

interface CognitiveFunctionTitleProps {
  value: string;
  cognitiveFunction: CognitiveFunctionType;
  position: CognitiveFunctionPosition;
}

export const CognitiveFunctionTitle = ({
  cognitiveFunction,
  position,
  value,
}: CognitiveFunctionTitleProps) => {
  return (
    <>
      <span
        style={{
          marginLeft: '0.3rem',
          fontWeight: 'bold',
        }}
      >
        {value}
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
