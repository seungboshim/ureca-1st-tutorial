function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return (
        <div style={{display: "flex", padding: 16, borderBottom: "1px solid gray"}}>
            {isLoggedIn && <span style={{marginRight: 8}}>환영합니다!!!!!!</span>}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    )
}

export default Toolbar;