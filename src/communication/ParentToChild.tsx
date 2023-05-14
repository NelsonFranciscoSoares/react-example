import { useState } from "react";

export function ParentToChild(){
    const [words, setWords] = useState('');

    const handleClick = () => setWords((w) => w + ' Did you do your homework?');

    console.log('Render parent');
    return (
        <div>
            <h1>Parent</h1>
            <button onClick={handleClick}>Ask</button>
            <Child hears={words}></Child>
        </div>
    );
}

function Child(props: ChildProps){
    console.log('Render child');
    return (
        <div>
            <h2>Child</h2>
            <p>{props.hears}</p>
        </div>
    );
}

interface ChildProps {
    hears: string;
}