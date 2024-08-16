import { useState } from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>
}

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginControl;