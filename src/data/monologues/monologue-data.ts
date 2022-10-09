import { CognitiveFunctionPosition } from "../cognitive-function-data";
import { CognitiveFunctionType } from "../cognitive-function-type";

export interface MonologueData {
    cognitiveFunction: CognitiveFunctionType;
    position: CognitiveFunctionPosition;
    monologue: string;
}