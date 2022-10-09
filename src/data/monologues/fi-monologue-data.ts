import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
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
    },{
        cognitiveFunction: Fi,
        position: nemesis,
        monologue: `Fi Nemesis is telling the ExFJ that, “You are not as useful as you could be because you don’t understand the processes that runs the world. AND your opinion is of low quality because you don’t consult others’ perspectives.” Fi Nemesis realizes that the value it can invest in other people is extremely limited by the knowledge they have gathered. Having quality information makes them useful. Further, usefulness is inseparable from efficiency, and until the ExFJ learns and develops efficient processes, the value they can contribute to others will be severely limited. Their Te Demon must be consulted for them to provide value.`
    }
]