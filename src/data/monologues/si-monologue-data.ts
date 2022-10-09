import { MonologueData } from "./monologue-data";
import { child, hero, inferior, parent } from "../cognitive-function-data";
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
    },
]