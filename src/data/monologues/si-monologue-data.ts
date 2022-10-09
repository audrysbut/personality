import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
import { Si } from "../cognitive-function-type";

export const siMonologueData: MonologueData[] = [
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
    },{
        cognitiveFunction: Si,
        position: nemesis,
        monologue: `Si Nemesis is telling the ESxP that, “Your lack of effort makes you undesirable.” ESxPs are worried that they will not have good experiences. It is their undesirability (Ne Demon) that creates their fear of having a bad experience. Developing their capacity for effort, discipline, and taking the consequences of their actions into account will make them more desirable, and ease the fear of having a bad experience.`
    }
]