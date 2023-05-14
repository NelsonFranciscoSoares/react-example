import React from "react";

function FruitListItem(props:any) {
    const handleClick = (e: any, id: number) => {
        console.log(e);
        console.log(`removed ${id}`);
    }

    return <li onClick={(e) => handleClick(e, props.fruit.id)}>{props.fruit.name}</li>;
}

export function FruitList(props:any) {
    const fruitListItems = props.fruits.map((fruit:any) => (
        <FruitListItem key={fruit.id} fruit={fruit} />
    ));

    return <ul>{fruitListItems}</ul>
}