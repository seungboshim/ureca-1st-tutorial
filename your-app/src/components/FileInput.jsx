import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 12px;
`

const InputBox = styled.input`
    padding: 12px;
    width: auto;
    border: 1px solid lightgray;
    border-radius: 4px;
`

export default function FileInput({ name, value, onChange }) {
    return (
        <Wrapper>
            <InputBox name={name} value={value} onChange={onChange} type='file'></InputBox>
        </Wrapper>
    )
}