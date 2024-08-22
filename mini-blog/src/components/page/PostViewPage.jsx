import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import data from "../../data.json";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    max-width: 720px;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;
const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;
const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;
const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export default function PostViewPage() {
    const navigate = useNavigate();
    const {postId} = useParams();
    const post = data.find((item) => {return item.id === parseInt(postId)});
    console.log(post);
    return (
        <Wrapper>
            <Container>
                <Button title="뒤로 가기" onClick={()=>{navigate('/')}} />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>
            </Container>
        </Wrapper>
    )
}