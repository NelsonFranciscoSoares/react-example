import React from "react";
import { ListItemProps } from "./List";

export function ListItemComponent( {item, onEdit, onRemove}: ListItemProps) {
    return(
        <p>
            <span>{item.name}</span>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onRemove(item)}>Remove</button>
        </p>
    );
}