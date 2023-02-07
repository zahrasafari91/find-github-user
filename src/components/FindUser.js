import { useState } from "react";
import GitHubUser from "./GitHubUser.js"
import './user.css'


const FindUser = () =>{
    const [userName, setUserName] = useState("");
    return(
        <div className="find-user">
            <h1>Find User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text" placeholder="Enter Name" onChange={(event) => setUserName(event.target.value)}/>
                </div>
                <div className="result">
                    {
                        userName?
                        <GitHubUser username={userName} /> :
                        <p>Please Search a Name..</p>
                    }
                </div>
            </form>
        </div>
    )
}

export default FindUser;