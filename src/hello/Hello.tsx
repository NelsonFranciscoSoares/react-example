import React from "react";
import { Props } from "./Props";
import { getExclamationMarks } from "./Helpers";

export function Hello({name, enthusiasmLevel = 1}: Props) {
    if(enthusiasmLevel <= 0){
        throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello { name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}