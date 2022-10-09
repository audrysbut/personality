import { MonologueData } from "./monologue-data";
import { child, hero, inferior, parent } from "../cognitive-function-data";
import { Fi } from "../cognitive-function-type";

export const fiMonologueData: MonologueData[] = [
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
]