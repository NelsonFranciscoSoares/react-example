import { SyntheticEvent, useState } from "react";

export function SigninForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Sign In</button>
        </form>
    );
}