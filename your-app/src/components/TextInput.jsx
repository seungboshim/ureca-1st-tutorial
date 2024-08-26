import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 12px;
`

const InputLabel = styled.div`
    padding-right: 12px;
    font-weight: 500;
`

const InputBox = styled.input`
    padding: 12px;
    width: auto;
    border: ${(props) => props.isvalid ? '1px solid lightgray' : '1px solid red'};
    border-radius: 4px;
`

export default function TextInput({ name, value, isValid, onChange, type }) {
    return (
        <Wrapper>
            <InputLabel>{name}</InputLabel>
            <InputBox name={name} value={value} isvalid={isValid} onChange={onChange} type={type}></InputBox>
        </Wrapper>
    )
}