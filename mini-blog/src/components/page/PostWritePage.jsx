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
    // const handleSubmit = () => {
    //     let ids = [];
    //     let titles = [];
    //     let contents = [];

    //     // 기존에 로컬스토리지에 있으면 배열에 담기
    //     if (localStorage.getItem('id') !== null) {
    //         // ids = localStorage.getItem('id').split(',');
    //         // titles = localStorage.getItem('title').split(',');
    //         // contents = localStorage.getItem('content').split(',');
    //         ids = JSON.parse(localStorage.getItem('id'));
    //         titles = JSON.parse(localStorage.getItem('title'));
    //         contents = JSON.parse(localStorage.getItem('content'));
    //     }

    //     // 새로운 글 제목, 내용 추가
    //     // localStorage.setItem('id', [...ids, ids.length]);
    //     // localStorage.setItem('title', [...titles, title]);
    //     // localStorage.setItem('content', [...contents, content]);
    //     localStorage.setItem('id', JSON.stringify([...ids, ids.length]));
    //     localStorage.setItem('title', JSON.stringify([...titles, title]));
    //     localStorage.setItem('content', JSON.stringify([...contents, content]));

    //     console.log(ids, titles, contents);

    //     navigate('/');
    // }

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