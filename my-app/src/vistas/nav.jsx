import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to = '/'>Login</Link>
            <br />
            <Link to = '/home'>Home</Link>
            <br />
            <Link to = '/user/profile'>Profile</Link>

        </div>
    )
}
export default Nav