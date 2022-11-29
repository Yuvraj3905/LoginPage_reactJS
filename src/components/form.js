import React from 'react';

const BasicForm=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <>
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autocomplete="off" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autocomplete="off" value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default BasicForm