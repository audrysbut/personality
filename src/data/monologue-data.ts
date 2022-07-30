import {
  child,
  CognitiveFunctionPosition,
  hero,
  inferior,
  parent,
} from "./cognitive-function-data";
import {
  CognitiveFunctionType,
  Fe,
  Fi,
  Ne,
  Ni,
  Se,
  Si,
  Te,
  Ti,
} from "./cognitive-function-type";

interface MonologueData {
  cognitiveFunction: CognitiveFunctionType;
  position: CognitiveFunctionPosition;
  monologue: string;
}

const monologueData: MonologueData[] = [
  {
    cognitiveFunction: Ne,
    position: hero,
    monologue:
      "I am swimming in an endless sea of possibilities about what to do/experience/think about next and I want to try them all.",
  },
  {
    cognitiveFunction: Ne,
    position: parent,
    monologue:
      "I see a million different ways to look at the concept I’ve been analyzing and I want to consider them all.",
  },
  {
    cognitiveFunction: Ne,
    position: child,
    monologue:
      "I will consider which possibilities will best help me accomplish the goal I have set.",
  },
  {
    cognitiveFunction: Ne,
    position: inferior,
    monologue:
      "(non-mature version) It is best to stick to the most reliable methods of getting things done. There is no sense getting lost in a sea of unpredictable possibilities.",
  },
  {
    cognitiveFunction: Ni,
    position: hero,
    monologue:
      "Everything is interconnected and I must determine the meaning and implication behind those connections.",
  },
  {
    cognitiveFunction: Ni,
    position: parent,
    monologue:
      "How can I use my intuitive knowledge about how things are connected in order to achieve what I want?",
  },
  {
    cognitiveFunction: Ni,
    position: child,
    monologue:
      "How can I improve upon – or even perfect – the approach that I regularly take toward my main passion or interest?",
  },
  {
    cognitiveFunction: Ni,
    position: inferior,
    monologue:
      "Everyone needs to stop over-analyzing everything, the answers are literally right in front of us.",
  },
  {
    cognitiveFunction: Se,
    position: hero,
    monologue:
      "I want to sample all of the experiences that are immediately available to me and see where those experiences lead me!",
  },
  {
    cognitiveFunction: Se,
    position: parent,
    monologue:
      "I want to go live out the experiences that I have determined to be the best or most enjoyable and see what happens as a result.",
  },
  {
    cognitiveFunction: Se,
    position: child,
    monologue:
      "I prefer to plan ahead, but when necessary, I can think surprisingly well on my feet, as I feel in tune with what is going on around me.",
  },
  {
    cognitiveFunction: Se,
    position: inferior,
    monologue:
      "(non-mature version) I must analyze all possible outcomes of a sensory experience, as the physical world is subject to change unexpectedly, at any time.",
  },
  {
    cognitiveFunction: Si,
    position: hero,
    monologue:
      "I prefer to plan the majority of my life around the traditional or tried-and-true methods of doing things, as they have proven to be the most reliable.",
  },
  {
    cognitiveFunction: Si,
    position: parent,
    monologue:
      "In order to achieve what I want, I will employ the most reliable and socially acceptable method of accomplishing it.",
  },
  {
    cognitiveFunction: Si,
    position: child,
    monologue:
      "I will examine how my new experience or theory sizes up against my past experiences or way of understanding the world.",
  },
  {
    cognitiveFunction: Si,
    position: inferior,
    monologue:
      "(non-mature version) Out with the old, in with the new! F*ck the system! The man can’t keep me down!",
  },
  {
    cognitiveFunction: Te,
    position: hero,
    monologue: "I will achieve my goal by any means necessary.",
  },
  {
    cognitiveFunction: Te,
    position: parent,
    monologue:
      "Now that I have determined the best or most reliable course of action, I will set it into motion using the most straightforward method available to me.",
  },
  {
    cognitiveFunction: Te,
    position: child,
    monologue:
      "I will employ the most straightforward method that exists in order to make my goal, dream or impulse come true.",
  },
  {
    cognitiveFunction: Te,
    position: inferior,
    monologue:
      "I have many goals I want to accomplish but often have trouble tangibly setting them into motion. I fear being perceived as incompetent by others.",
  },
  {
    cognitiveFunction: Ti,
    position: hero,
    monologue:
      "I must figure out exactly how everything logistically works in relation to everything else",
  },
  {
    cognitiveFunction: Ti,
    position: parent,
    monologue:
      "How can I manipulate the way that this object or situation works so that it instead works the way I’d like it to?",
  },
  {
    cognitiveFunction: Ti,
    position: child,
    monologue:
      "Where does this new hunch or piece of information I’ve acquired fit in relation to what I already know to be true?",
  },
  {
    cognitiveFunction: Ti,
    position: inferior,
    monologue:
      "Can I use these objective observations about others to my advantage?",
  },
  {
    cognitiveFunction: Fe,
    position: hero,
    monologue:
      "I will make those around me feel comfortable and happy in a cohesive manner, by identifying what we are all mutually striving for.",
  },
  {
    cognitiveFunction: Fe,
    position: parent,
    monologue:
      "I will analyze the information that is available to me and then see how I can use it to achieve interpersonal peace.",
  },
  {
    cognitiveFunction: Fe,
    position: child,
    monologue:
      "I will assess the feelings of those around me to determine whether or not I can get what I want from them.",
  },
  {
    cognitiveFunction: Fe,
    position: inferior,
    monologue:
      "(non-mature version) Feelings make me freeze with anxiety because I don’t know how to moderate them. I am terrified of accidentally offending someone.",
  },
  {
    cognitiveFunction: Fi,
    position: hero,
    monologue:
      "I must decide how I feel and where I stand on these issues before coming to a conclusion about what to do.",
  },
  {
    cognitiveFunction: Fi,
    position: parent,
    monologue:
      "I need to isolate myself to process how I feel about the activities I’ve been engaging in lately and decide whether or not to keep doing them.",
  },
  {
    cognitiveFunction: Fi,
    position: child,
    monologue:
      "I must adhere to my values and morals at all costs – even if doing so is unpleasant.",
  },
  {
    cognitiveFunction: Fi,
    position: inferior,
    monologue:
      "Feelings are for the weak. I have no time to attend to such trivial matters in either myself or others.",
  },
];

export function getMonologueData(
  cognitiveFunction: CognitiveFunctionType,
  position: CognitiveFunctionPosition
): MonologueData | undefined {
  const found = monologueData
    .filter((r) => r.cognitiveFunction === cognitiveFunction)
    .filter((r) => r.position === position);

  if (found) {
    return found[0];
  }
  return undefined;
}
