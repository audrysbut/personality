import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
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
    },{
        cognitiveFunction: Te,
        position: nemesis,
        monologue: `Te Nemesis is telling the IxTP that, “You will not be able to teach people better ways of thinking until you know what is worth teaching.” Te Nemesis is trying to communicate that by providing a variety of well-researched, alternate perspectives with others, value is created. Te Nemesis understands that most people’s thinking will vastly improve when they are given the right perspective and the right context on a topic or event. The Fi Demon wants the IxTP to weigh out different perspectives, knowing that many of them will not be valuable, but some of them will be essential to improving others’ thinking.`
    }
]