import { MonologueData } from "./monologue-data";
import { child, hero, inferior, parent } from "../cognitive-function-data";
import { Te } from "../cognitive-function-type";

export const teMonologueData: MonologueData[] = [
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
]