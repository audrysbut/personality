import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
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
    },{
        cognitiveFunction: Ti,
        position: nemesis,
        monologue: `Ti Nemesis is telling the ExTJs that, “You are not as smart as you could be because you don’t consider what is good for other people.” Every Ti user learns that their intelligence is linked to how helpful they can be to other people. If ExTJs took the time to consider what is actually good for other people, they will unlock the power of their Fe Demon. When they do this, their Ti Nemesis’ capacity to think clearly and verify their stored information will grow exponentially.`
    }
]