import { CognitiveFunctionPosition } from "../../data/cognitive-function-roles";
import { Personality } from "../../data/personality";
import { SingleCognitiveFunction } from "./single-cognitive-function";

interface CognitiveFunctionDescriptionsProps {
  personality: Personality;
}

export const CognitiveFunctionDescription = ({
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
