import { useState } from "react";

export function ExampleForm() {

    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        //setValue(event.target.value.toUpperCase());
    }

    return (
        <form>
            <input type="text" value={value}/>
            <pre>{value}</pre>
        </form>
    );
}