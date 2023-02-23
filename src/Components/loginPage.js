import React, { useState } from "react";

const LoginPage = () => {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const label = event.target.name;
        const value = event.target.value;
        setInput({...input, [label]: value})
    };
    
    console.log("input",input);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem(JSON.stringify(input));
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name='name' onChange={handleChange}></input>
                <br />
                <label>Password</label>
                <input type="Password" name='pass' onChange={handleChange}></input>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default LoginPage;