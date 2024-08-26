import Button from "../ui/Button";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    display: flex;
    flex-direction: column;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;
const TitleInput = styled.input`
    width: auto;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    &:focus {
        outline: none;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s;
    }
`;
const ContentInput = styled.textarea`
    width: auto;
    height: 400px;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    &:focus {
        outline: none;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s;
    }
`;

export default function PostWritePage() {
    const navigate = useNavigate();

    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');

    const handleSubmit = () => {
        let posts = [];
        if (localStorage.getItem('posts') !== null) {
            posts = JSON.parse(localStorage.getItem('posts'));
        }

        const id = posts.length === 0 ? 0 : posts[posts.length - 1].id + 1;

        const post = {
            id: id,
            title: title,
            content: content,
            comments: []
        }
        const newPosts = [...posts, post];

        localStorage.setItem('posts', JSON.stringify(newPosts));
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20} 
                    onChange={(event)=>{
                        setTitle(event.target.value);
                    }}
                    value={title}
                    />
                <TextInput
                    height={480}
                    onChange={(event)=>{
                        setContent(event.target.value);
                    }}
                    value={content}
                />
                <Button title="글쓰기" onClick={handleSubmit}></Button>
            </Container>
        </Wrapper>
    )
}