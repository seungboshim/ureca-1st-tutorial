import { useCallback, useRef } from "react";

function TextInputWithFocusButton(props) {
    const inputRef = useRef(null);

    const handleClick = useCallback(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>포커스 버튼</button>
        </>
    )
}

export default TextInputWithFocusButton;