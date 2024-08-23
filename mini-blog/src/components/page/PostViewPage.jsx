import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import CommentInput from "../ui/CommentInput";
import { useEffect, useState } from "react";


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
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
    margin-bottom: 16px;
`;
const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;
const CommentContainer = styled.div`
    /* :not(:last-child) {
        margin-bottom: 16px;
    } */
`
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

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts'));
        if (storedPosts !== null) {
            setPosts(storedPosts);
            const currPost = storedPosts.find((item) => {return item.id === parseInt(postId)});
            setPost(currPost);
        }
    }, [postId])

    const handleChange = (e) => {
        setCommentInput(e.target.value);
    }

    const handleSubmit = () => {
        const id = post.comments.length === 0 ? 0 : post.comments[post.comments.length - 1].id + 1;
        const comment = {
            id: id,
            content: commentInput,
        }

        const newComment = [...post.comments, comment];
        const newPost = {...post, comments: newComment};
        const newPosts = posts.map((post) => {
            if (post.id === parseInt(postId)) {
                return newPost;
            } else {
                return post;
            }
        })

        setPosts(newPosts);
        setPost(newPost);
        localStorage.setItem('posts', JSON.stringify(newPosts));
        setCommentInput('');
    }

    const handleModify = () => {

    }

    const handleDelete = () => {
        const newPosts = posts.filter((post) => {
            return post.id !== parseInt(postId);
        })
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts))
        alert("삭제되었습니다.");
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"16px"}}>
                    <Button title="뒤로 가기" onClick={()=>{navigate('/')}} />
                    <div style={{display:"flex", gap:"16px"}}>
                        <Button title="수정" onClick={handleModify} />
                        <Button title="삭제" onClick={handleDelete} />
                    </div>
                </div>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>
                <CommentContainer>
                    <CommentList comments={post.comments}></CommentList>
                    <CommentInput onChange={handleChange} onClick={handleSubmit} value={commentInput}></CommentInput>
                </CommentContainer>
            </Container>
        </Wrapper>
    )
}