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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(err==0)

            await fetch("https://zpworkshopapis.netlify.app/.netlify/functions/account/signup",
            {
                method: "POST",

     
    // Adding body or contents to send
    body: JSON.stringify({
        username: input.username,
        name: input.name,
        password: input.password,
    })
            }
            ).then(response => response.json())
 
            // Displaying results to console
            .then((json) =>{
                console.log(json);
            } )
            // localStorage.setItem("userDetails", JSON.stringify(input));
        else
            alert(msg)
        console.log("output---" + input.username)
    };
    console.log(input);
    return (
        <div class="box">
            <h1>REGISTRATION</h1>
            <form>
            <div class="tx1">
                <label>USERNAME</label>
                <input type="text" name="username" onChange={handleChange}></input>
                <br />

                <label>NAME</label>
                <input type="text" name="name" id="pro1" onChange={handleChange}></input>
                <br />

                <label>PASSWORD</label>
                <input type="text" name="password" id="pro2" onChange={handleChange} onBlur={handlePassword}></input>
                <br />
            </div>  

                <div class="b1">
                <button id="b3" onClick={handleSubmit}>Register</button>
                </div>
                <div class="b2">
                <button id="b4" onClick={handleClear}>Clear</button>
                </div>
                

            </form>
        </div>
    )
}

export default Register;