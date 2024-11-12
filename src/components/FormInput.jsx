import "./FormInput.css";


function FormInput(props) {

    const { label, errorMessage, handleChange, ...inputProps } = props;

    return (
        <div className="formInput">
            <label htmlFor="">{label}</label>
            <input {...inputProps} onChange={handleChange} />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;
