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
            errorMessage: "Please enter your full name!",
            label: "Full Name",
            required: true,
        },
        {
            id: 2,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid e-mail address",
            label: "Email",
            required: true,
        },
        {
            id: 4,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            required: true,
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            required: true,
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
                    <h1>Register</h1>
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
