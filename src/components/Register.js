import React, { useState } from 'react'


function Register() {
    var err = 1;
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const label = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [label]: value })
    };
    console.log(input);

    const handleClear = () => {
        setInput({});
    }
    let msg = "Fields should not be empty";
    const handlePassword = (event) => {
        err = 1;
        const value = event.target.value;
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = value.length;
        const uppercasePassword = uppercaseRegExp.test(value);
        const lowercasePassword = lowercaseRegExp.test(value);
        const digitsPassword = digitsRegExp.test(value);
        const specialCharPassword = specialCharRegExp.test(value);
        const minLengthPassword = minLengthRegExp.test(value);

        if (passwordLength === 0) {
            msg = "Password is empty";
        } else if (!uppercasePassword) {
            msg = "Your password must at least one Uppercase";
        } else if (!lowercasePassword) {
            msg = "Your password must at least one Lowercase";
        } else if (!digitsPassword) {
            msg = "Your password must at least one digit";
        } else if (!specialCharPassword) {
            msg = "Your password must at least one Special Characters";
        } else if (!minLengthPassword) {
            msg = "Your password must at least minumum 8 characters";
        } else {
            msg = "";
            err = 0;
        }

        if (msg !== "") {
            return alert(msg);
        }



    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(err==0)
            localStorage.setItem("userDetails", JSON.stringify(input));
        else
            alert(msg)
        console.log("output---" + input.username)
    };
    console.log(input);
    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange}></input>
                <br />

                <label>Password</label>
                <input type="text" name="password" onChange={handleChange} onBlur={handlePassword}></input>
                <br />


                <button onClick={handleSubmit}>Save</button>
                <br />
                <button onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}

export default Register