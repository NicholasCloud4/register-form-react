import React from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
    const [values, setValues] = React.useState({
        fullname: "",
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            label: "Full Name",
        },
        {
            id: 2,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
        },
        {
            id: 4,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
        },
    ];

    console.log("re-render");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    console.log(values);

    return (
        <>
            <div className="app">
                <form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}

                    <button>SUBMIT</button>
                </form>
            </div>
        </>
    );
}

export default App;
