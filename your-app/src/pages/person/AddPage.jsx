import { useState } from "react"
import styled from "styled-components"
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import TextInput from "../../components/TextInput";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
`

const InputContainer = styled.div`
    
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default function AddPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [job, setJob] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [ageValid, setAgeValid] = useState(true);
    const [jobValid, setJobValid] = useState(true);

    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (value) {
            if (name === '이름') {
                setNameValid(true);
            } else if (name === '나이') {
                setAgeValid(true);
            } else {
                setJobValid(true);
            }
        }

        if (name === '이름') {
            setName(value);
        } else if (name === '나이') {
            setAge(value);
        } else {
            setJob(value);
        }
    }

    const handleSubmit = () => {
        if (!name) setNameValid(false);
        if (!age) setAgeValid(false);
        if (!job) setJobValid(false);
        if (!name || !age || !job) return;

        const data = {
            name: name,
            age: age,
            job: job
        }

        // POST
        axios.post('http://localhost:8080/person/form', data)
        .then((response) => {
            console.log(response);
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <Wrapper>
            <Container>
                <Title></Title>
                <InputContainer>
                    <TextInput name='이름' onChange={handleInput} isValid={nameValid} type='text'></TextInput>
                    <TextInput name='나이' onChange={handleInput} isValid={ageValid} type='number'></TextInput>
                    <TextInput name='직업' onChange={handleInput} isValid={jobValid} type='text'></TextInput>
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => navigate('/')} label='목록 보기' />
                    <Button onClick={handleSubmit} label='추가하기' theme='primary' />
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}