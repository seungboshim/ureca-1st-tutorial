import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    margin: 10px;
    border: 1px solid lightcoral;
    background-color: ${(props) => props.theme === 'primary' ? 'lightcoral' : 'white'};
    color: ${(props) => props.theme === 'primary' ? 'white' : 'black'};
    font-weight: ${(props) => props.theme === 'primary' ? '600' : '400'};;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    &:hover {
        box-shadow: 0 0 4px lightcoral;
        transition: box-shadow 0.3s;
    }
`
const DisabledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    margin: 10px;
    border: 1px solid lightgray;
    background-color: gray;
    color: white;
    font-weight: ${(props) => props.theme === 'primary' ? '600' : '400'};
    border-radius: 5px;
    user-select: none;
`

function Button({ onClick, label, theme, disabled }) {
    if (disabled) {
        return (
            <DisabledWrapper>
                {label}
            </DisabledWrapper>
        )
    } else {
        return (
            <Wrapper onClick={onClick} theme={theme}>
                {label}
            </Wrapper>
        )
    }
}

export default Button;