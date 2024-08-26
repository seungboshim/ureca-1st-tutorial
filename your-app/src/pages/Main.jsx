import { useState } from "react";
import Button from "../components/Button";
import styled from 'styled-components';
import Number from "../components/Number";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

function MainPage() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const handleClick = () => {
        setCount((prev) => prev + 1);
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <Wrapper>
            <Container>
                <h1>안녕</h1>
                {count > 0 && <Number number={count} />}
            </Container>
            <Button label='안녕' onClick={handleClick} />
            <input type="text" value={text} onChange={handleChange} />
        </Wrapper>
    )
}

export default MainPage;