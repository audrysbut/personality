import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
import { Ne } from "../cognitive-function-type";
import { MonologueData } from "./monologue-data";

export const neMonologueData: MonologueData[] = [
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
    },{
        cognitiveFunction: Ne,
        position: nemesis,
        monologue: `Ne Nemesis is telling the INxJ, “You are worried about the future and others’ intentions because you are unprepared for them.” Their Si Demons KNOW that the INxJ lacks the life experience — lacks the Si — to have faith that they can endure anything. Ne Nemesis carries Si Demon’s message to put in effort in order to be prepared for whatever may come.`
    }
]