import { MonologueData } from "./monologue-data";
import { child, hero, inferior, nemesis, parent } from "../cognitive-function-data";
import { Se } from "../cognitive-function-type";

export const seMonologueData: MonologueData[] = [
    {
        cognitiveFunction: Se,
        position: hero,
        monologue:
            "I want to sample all of the experiences that are immediately available to me and see where those experiences lead me!",
    },
    {
        cognitiveFunction: Se,
        position: parent,
        monologue:
            "I want to go live out the experiences that I have determined to be the best or most enjoyable and see what happens as a result.",
    },
    {
        cognitiveFunction: Se,
        position: child,
        monologue:
            "I prefer to plan ahead, but when necessary, I can think surprisingly well on my feet, as I feel in tune with what is going on around me.",
    },
    {
        cognitiveFunction: Se,
        position: inferior,
        monologue:
            "(non-mature version) I must analyze all possible outcomes of a sensory experience, as the physical world is subject to change unexpectedly, at any time.",
    },{
        cognitiveFunction: Se,
        position: nemesis,
        monologue: `Se Nemesis is telling the ISxJ, “You can’t perform because you don’t let yourself want anything. Good performance stems from desire, and you refuse to want anything.” Se Nemesis is trying to get the ISxJ to want something with their Ni Demon. When they give themselves the freedom to express desire, it creates a proactive pursuit of performance where their desire burns away their fear of giving others a bad experience.`
    }
]