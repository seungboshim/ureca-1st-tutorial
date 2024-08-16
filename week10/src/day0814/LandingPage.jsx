import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    // eslint-disable-next-line no-undef
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <div>
                경원이 졸업축하바리베리용
            </div>
        </div>
    )
}

export default LandingPage;