import { MonologueData } from "./monologue-data";
import { child, hero, inferior, parent } from "../cognitive-function-data";
import { Ti } from "../cognitive-function-type";

export const tiMonologueData: MonologueData[] = [
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
]