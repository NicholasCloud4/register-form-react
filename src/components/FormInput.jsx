import "./FormInput.css";

function FormInput(props) {
    return (
        <div className="formInput">
            <label htmlFor=""></label>
            <input
                type="text"
                placeholder={props.placeholder}
                ref={props.refer}
            />
        </div>
    );
}

export default FormInput;
