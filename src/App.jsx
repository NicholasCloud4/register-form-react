import React, { useRef } from 'react';
import './App.css'
import FormInput from './components/FormInput'

function App() {
    // const [username, setUsername] = React.useState("");

    console.log("re-render");

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Object.fromEntries(data));

    }

    return (
        <>
            <div className='app'>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="Username" name="username" />
                    <FormInput placeholder="Email" name="email" />
                    <FormInput placeholder="Full Name" name="fullname" />
                    <FormInput placeholder="address" name="address" />
                    <button>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default App
