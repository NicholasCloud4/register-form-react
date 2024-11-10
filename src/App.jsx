import './App.css'
import FormInput from './components/FormInput'

function App() {
    return (
        <>
            <div className='app'>
                <form action="">
                    <FormInput placeholder="Username" />
                    <FormInput placeholder="Email" />
                    <FormInput placeholder="Full Name" />
                    <FormInput placeholder="address" />
                </form>
            </div>
        </>
    )
}

export default App
