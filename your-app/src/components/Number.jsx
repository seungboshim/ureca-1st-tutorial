import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    margin: 10px;
    border-radius: 50%;
    background-color: lavender;
`

function Number({ number }) {
    return (
        <Wrapper>
            {number}
        </Wrapper>
    )
}

export default Number;