import React, { useRef } from 'react';
import './App.css'
import FormInput from './components/FormInput'

function App() {
    // const [username, setUsername] = React.useState("");

    const usernameRef = useRef();



    console.log("re-render");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(usernameRef);
    }

    return (
        <>
            <div className='app'>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="Username" refer={usernameRef} />
                    <FormInput placeholder="Email" />
                    <FormInput placeholder="Full Name" />
                    <FormInput placeholder="address" />
                    <button>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default App
