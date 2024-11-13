import { useState } from "react";
import "./FormInput.css";


function FormInput(props) {
    const [focused, setFocused] = useState(false);

    const { label, errorMessage, handleChange, ...inputProps } = props;


    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="formInput">
            <label htmlFor="">{label}</label>
            <input {...inputProps} onChange={handleChange} onBlur={handleFocus} onFocus={inputProps.name === "confirmPassword" ? () => setFocused(true) : null} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;
