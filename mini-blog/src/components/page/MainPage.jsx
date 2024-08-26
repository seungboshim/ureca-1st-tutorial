import styled from "styled-components";
import Button from '../ui/Button';
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";

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

export default function MainPage() {
    // posts 불러오기
    let posts = [];
    if (localStorage.getItem('posts') !== null) {
        // getItem으로 posts 불러옴 -> 스트링임
        // JSON.parse로 스트링 -> 객체로 변환
        posts = JSON.parse(localStorage.getItem('posts'));
    }

    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Button title="글 작성하기" onClick={()=>navigate('/post-write')}/>  
                <PostList
                    posts={posts}
                    onClickItem={(item) => {navigate(`/post/${item.id}`)}}
                >
                </PostList>
            </Container>
        </Wrapper>
    );
}