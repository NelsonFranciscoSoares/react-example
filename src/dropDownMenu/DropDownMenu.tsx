import { useState } from "react";

export function DropDownMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen((currentIsOpen) => !currentIsOpen);

    console.log('DropDownMenu');

    const menu = (
        <ul>
            <li>Edit</li>
            <li>Remove</li>
            <li>Archive</li>
        </ul>
    );
    return (
        <div>
            <button onClick={handleClick}>Actions</button>
            {isOpen && menu}
        </div>
    );
}