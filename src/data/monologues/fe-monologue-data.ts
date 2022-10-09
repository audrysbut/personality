import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
import { Fe } from "../cognitive-function-type";

export const feMonologueData: MonologueData[] = [
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
    },{
        cognitiveFunction: Fe,
        position: nemesis,
        monologue: `Fe Nemesis is telling IxFPs that, “You are not as caring as you could be because you don’t know what actually helps people.” Ti and Fe are linked together because what is TRUE is what is most HELPFUL. “The truth will set you free.” Until the IxFP consults the power of truth, their “healing process” will be one of perpetually nurturing an infected wound without digging past the surface to kill the infection.`
    }
]