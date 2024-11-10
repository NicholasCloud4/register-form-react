import "./FormInput.css";

function FormInput(props) {
    return (
        <div className="formInput">
            <label htmlFor=""></label>
            <input
                name={props.name}
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default FormInput;
