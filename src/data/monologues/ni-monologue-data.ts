import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
import { Ni } from "../cognitive-function-type";

export const niMonologueData: MonologueData[] = [
    {
        cognitiveFunction: Ni,
        position: hero,
        monologue:
            "Everything is interconnected and I must determine the meaning and implication behind those connections.",
    },
    {
        cognitiveFunction: Ni,
        position: parent,
        monologue:
            "How can I use my intuitive knowledge about how things are connected in order to achieve what I want?",
    },
    {
        cognitiveFunction: Ni,
        position: child,
        monologue:
            "How can I improve upon – or even perfect – the approach that I regularly take toward my main passion or interest?",
    },
    {
        cognitiveFunction: Ni,
        position: inferior,
        monologue:
            "Everyone needs to stop over-analyzing everything, the answers are literally right in front of us.",
    },{
        cognitiveFunction: Ni,
        position: nemesis,
        monologue: `Ni Nemesis is telling the ENxPs that, “You won’t get what you want until you learn to perform.” Their Se Demons are aware that their freedom of choice will be jeopardized so long as they continually make people uncomfortable and remain unable to perform. Until the ENxP learns to value the importance of the shared present moment, and improving their own performance, their Ni Nemesis will continue to create fear for their future.`
    }
]