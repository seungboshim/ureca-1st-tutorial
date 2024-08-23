import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledTextArea = styled.textarea`
    width: auto;
    flex-grow: 1;
    height: auto;
    padding: 16px;
    margin-right: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    &:focus {
        outline: none;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s;
    }
`
;

function CommentInput(props){
    const {onChange, onClick, value} = props;
    return (
        <Wrapper>
            <StyledTextArea onChange={onChange} value={value}></StyledTextArea>
            <div style={{marginBottom: "16px"}}>
                <Button title="댓글 쓰기" onClick={onClick}></Button>
            </div>
        </Wrapper>
    );

}

export default CommentInput;