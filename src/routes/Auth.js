import React, { useState } from "react";

export default () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const onChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (
    <div>
        <form>
            <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
            <input type="submit" value="Log In" />
        </form>
        <div>
            <button>Continue with Google</button>
            <button>Continue with GitHub</button>
        </div>
    </div>
)};