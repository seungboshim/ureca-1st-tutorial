import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import axios from 'axios';

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

export default function EditPage() {
    const params = useParams();
    const id = parseInt(params.id);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [job, setJob] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [ageValid, setAgeValid] = useState(true);
    const [jobValid, setJobValid] = useState(true);

    /** GET /person/upform?no=${id} -> id에 해당하는 사람만 가져오기: name, age, job 저장 */
    useEffect(() => {
        axios.get(`http://localhost:8080/person/upform?no=${id}`)
        .then((response) => {
            setName(response.data.name);
            setAge(response.data.age);
            setJob(response.data.job);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

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

    /** PATCH /person/upform?no=${id} -> id에 해당하는 사람의 정보 수정 */
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

        axios.patch(`http://localhost:8080/person/upform?no=${id}`, data)
        .then((response) => {
            console.log(response);
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
        })
    }

    /** DELETE /person/delete?no=${id} -> id에 해당하는 사람 삭제 */
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/person/delete?no=${id}`)
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
                    <TextInput name='이름' value={name} onChange={handleInput} isValid={nameValid} type='text'></TextInput>
                    <TextInput name='나이' value={age} onChange={handleInput} isValid={ageValid} type='number'></TextInput>
                    <TextInput name='직업' value={job} onChange={handleInput} isValid={jobValid} type='text'></TextInput>
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => navigate('/')} label='목록 보기' />
                    <Button onClick={handleSubmit} label='수정하기' theme='primary' />
                    <Button onClick={handleDelete} label='삭제하기' theme='primary' />
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}