import { useState } from "react";
import { Item, ListProps } from "./List";
import { FormComponent } from "./FormComponent";
import { ListItemComponent } from "./ListItemComponent";

export function ListComponent({items, onRemove, onUpdate}: ListProps){
    const [editingItem, setEditingItem] = useState<Item | null>(null);

    const handleEdit = (item: Item) => setEditingItem(item);

    const handleCancel = () => setEditingItem(null);
    
    return(
        <ul>
            {items.map((item: Item) => (
                <li key={item.id}>
                    {item == editingItem ? (
                        <FormComponent />
                    ): (
                        <ListItemComponent item={item} onEdit={handleEdit} onRemove={onRemove}></ListItemComponent>
                    )}
                </li>   
            ))}
        </ul>
    );
}