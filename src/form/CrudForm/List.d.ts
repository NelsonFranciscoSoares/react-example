export type ListItemProps = {
    item: Item;
    onEdit: (item: Item) => void;
    onRemove: (item: Item) => void;
};

export type ListProps = {
    items: Item[];
    onUpdate: (item: Item) => void;
    onRemove: (item: Item) => void;
};

export type FormProps = {
    item: Item;
    onSubmit: (item: Item) => void;
    onCancel: () => void;
    buttonValue: string;
};

const id = (): string => "_" + Math.random().toString(36).substring(2,9);

export class Item {
    id: string;
    name: string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
}

const initialItems = [
    new Item(id(), "First Item"),
    new Item(id(), "Second Item"),
    new Item(id(), "Third Item")
];