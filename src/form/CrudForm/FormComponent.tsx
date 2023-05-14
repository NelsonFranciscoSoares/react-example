import React, { useState } from "react";
import { FormProps } from "./List";

export function FormComponent({item, onSubmit, onCancel, buttonValue}: FormProps){
    const [inputValue, setInputValue] = useState(item.name || '');
    return (
        <React.Fragment>
            
        </React.Fragment>
    );
}